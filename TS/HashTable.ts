class HashTable {
    table:Array<Array<[string,string|number|undefined]>>
    constructor(public size:number) {
        this.table = new Array(size)
    }

    hash(key:string):number{
        let total =0;
        for(let i=0;i<key.length;i++) {
            total+=key.charCodeAt(i)
        }

        return total % this.size
    }

    set(key:string,value:string|number|undefined):void{
        const index:number = this.hash(key)
        // this.table[index] = value
        const bucket =this.table[index] 
        if(!bucket) {
            this.table[index] = [[key,value]]
        } else {
            const sameKeyItem = bucket.find(item => {
                const [sameKey] = item
                return sameKey === key
            })
            if(sameKeyItem) {
                sameKeyItem[1] = value
            } else {
                this.table[index].push([key,value])
            }
        }
    }

    get(key:string):string|number|undefined{
        const index:number = this.hash(key)
        const bucket = this.table[index]
        if(bucket) {
            const sameKeyItem = bucket.find(item => {
                const [sameKey] = item
                return sameKey === key
            })
            return sameKeyItem && sameKeyItem[1]
        }
        return undefined
        // return this.table[index] || 'No Value'
    }

    remove(key:string):void{
        const index = this.hash(key)
        const bucket = this.table[index]
        if(bucket) {
            const sameKeyItem = bucket.find(item => {
                const [sameKey] = item
                return sameKey === key
            })
            if(sameKeyItem) {
                bucket.splice(bucket.indexOf(sameKeyItem || ['','']),1)
            }
        }
    }

    display(){
        for(let i=0;i< this.table.length;i++){
           if(this.table[i]) {
            console.log(`${i} ${this.table[i].flat()}`)
           }
        }
    }
}

// const table = new HashTable(50)
// table.set('name','Bruce')
// table.set('age',25)
// table.display()

export default HashTable