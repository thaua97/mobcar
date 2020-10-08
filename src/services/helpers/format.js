export const formatCurrancy = (value = 0) => {
    return parseInt(value).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
};