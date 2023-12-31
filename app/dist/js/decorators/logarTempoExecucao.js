export function logarTempoExecucao(tempoSegundos = false) {
    return function (target, propertyKey, descriptor) {
        const metodoOriginal = descriptor.value;
        descriptor.value = function (...args) {
            const t1 = performance.now();
            const retorno = metodoOriginal.apply(this, args);
            const t2 = performance.now();
            tempoSegundos ? console.log(`${propertyKey}, tempo de execução: ${((t2 - t1) / 100)} segundos.`) :
                console.log(`${propertyKey}, tempo de execução: ${((t2 - t1) / 1)} milisegundos.`);
            return retorno;
        };
        return descriptor;
    };
}
//# sourceMappingURL=logarTempoExecucao.js.map