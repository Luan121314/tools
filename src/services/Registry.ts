export class Registry<T> {
    
    public items = new Map<string, T>()

    constructor(){
        console.log("instanced registry")
    }
    

    register(name: string, item: T){
        this.items.set(name ,item)
    }

    unRegister(name:string){
        if(this.items.has(name)){
            this.items.delete(name) 
        }
    }
}