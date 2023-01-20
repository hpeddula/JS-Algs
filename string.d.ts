declare global {
    interface String {
      replaceAt(this: string,index:number,replacement:string): string;
    }
}

export{}