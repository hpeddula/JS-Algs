const kadane = (numbers =[]) => {
    let meh=0,msf=Number.MIN_SAFE_INTEGER;
    for(let num of numbers) {
        meh = meh + num;
        if(meh < num) {
            meh = num
        }
        if(msf < meh) {
            msf = meh
        }
    }
    return msf;
}