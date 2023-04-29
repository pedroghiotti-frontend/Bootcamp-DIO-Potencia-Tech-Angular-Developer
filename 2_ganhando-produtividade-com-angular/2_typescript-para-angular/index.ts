// GET e SET
function minLength(length:number)
{
    return (target:any, key:string) =>
    {
        let _val:string;

        const getter = () =>
        {
            _val;
        }
        const setter = (val:string) =>
        {
            if(val.length < length)
            {
                throw new Error(`Tamanho menor que ${length}.`);
            }
            else
            {
                _val = val;
            }
        }

        Object.defineProperty(target, key, {
            get: getter,
            set: setter
        });
    };
}

class Customer
{
    constructor(name:string, tel:number)
    {    
        this.name = name;
        this.tel = tel;
    }

    @minLength(5)
    name;
    tel;
}

const c = new Customer('1234', 22222222);