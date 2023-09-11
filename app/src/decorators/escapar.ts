export function escapar(){
    return function(
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ) {
        const metodoOriginal = descriptor.value;
        descriptor.value = function(... args: Array<any>){
            let retorno = metodoOriginal.apply(this, args);
            
            //console.log(`@escapar: Decorator em ação na classe ${this.constructor.name} no método ${propertyKey}`);

            if (typeof retorno == 'string'){
                retorno = retorno.replace(/<script>[\s\S]*?<script>/, '');
            }

            return retorno;
        }

        return descriptor;
    }
}