type Texto = {
    texto: string,
    tipo: string
}
//https://tailwindcomponents.com/component/alerts-components-1
const Alerts = ({ texto, tipo }: Texto) => {
    return (
        
        <div className="modal-content mt-4">
            {tipo === 'success' ? (
                <div className="py-3 px-5 mb-4 bg-green-200 text-green-900 text-sm rounded-md border border-green-200 relative">
                    <span>{texto}</span>
                </div>
            ) : tipo === 'danger' ? (
                <div className="py-3 px-5 mb-4 bg-red-200 text-red-900 text-sm rounded-md border border-red-200 relative">
                    <span>{texto}</span>
                </div>
            ) : (
                <div className="py-3 px-5 mb-4 bg-gray-200 text-gray-900 text-sm rounded-md border border-gray-200 relative">
                    <span>{texto}</span>
                </div>
            )}
        </div>

    );
};

export default Alerts;