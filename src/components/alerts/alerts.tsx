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


/* <button
          type="button"
          className="absolute top-2 right-2 cursor-pointer"
          onClick={onClose}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-4 w-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button> */


/* <div class="py-3 px-5 mb-4 bg-blue-100 text-blue-900 text-sm rounded-md border border-blue-200 flex items-center justify-between" role="alert">
    <span>A simple primary alert—check it out!</span>
    <button class="w-4" type="button" data-dismiss="alert" aria-label="Close" onclick="this.parentElement.remove();">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
    </button>
</div>

<div class="py-3 px-5 mb-4 bg-gray-100 text-gray-900 rounded-md text-sm border border-gray-200 flex items-center justify-between" role="alert">
    <span>A simple secondary alert—check it out!</span>
    <button class="w-4" type="button" data-dismiss="alert" aria-label="Close" onclick="this.parentElement.remove();">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
    </button>
</div> 
 
 
<div class="py-3 px-5 mb-4 bg-red-100 text-red-900 text-sm rounded-md border border-red-200 flex items-center justify-between" role="alert">
    <span>A simple danger alert—check it out!</span>
    <button class="w-4" type="button" data-dismiss="alert" aria-label="Close" onclick="this.parentElement.remove();">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
    </button>
</div>

<div class="py-3 px-5 mb-4 bg-yellow-100 text-yellow-900 text-sm rounded-md border border-yellow-200 flex items-center justify-between" role="alert">
    <span>A simple warning alert—check it out!</span>
    <button class="w-4" type="button" data-dismiss="alert" aria-label="Close" onclick="this.parentElement.remove();">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
    </button>
</div>

<div class="py-3 px-5 mb-4 bg-purple-100 text-purple-900 text-sm rounded-md border border-purple-200 flex items-center justify-between" role="alert">
    <span>A simple info alert—check it out!</span>
    <button class="w-4" type="button" data-dismiss="alert" aria-label="Close" onclick="this.parentElement.remove();">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
    </button>
</div>

<div class="py-3 px-5 mb-4 bg-gray-300 text-gray-900 rounded-md text-sm border border-gray-400 flex items-center justify-between" role="alert">
    <span>A simple dark alert—check it out!</span>
    <button class="w-4" type="button" data-dismiss="alert" aria-label="Close" onclick="this.parentElement.remove();">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
    </button>
</div> */