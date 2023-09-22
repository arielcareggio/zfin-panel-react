/* https://codepen.io/aurer/pen/ZEJxpO */
function SvgCargando() {
    return (
        <div>
            <svg className="svgCargando" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                width="35" height="30px" viewBox="0 0 24 30"  >
                <rect x="0" y="0" width="4" height="10" fill="#333">
                    <animateTransform attributeType="xml"
                        attributeName="transform" type="translate"
                        values="0 0; 0 20; 0 0"
                        begin="0.3" dur="0.7s" repeatCount="indefinite" />
                </rect>
                <rect x="10" y="0" width="4" height="10" fill="#333">
                    <animateTransform attributeType="xml"
                        attributeName="transform" type="translate"
                        values="0 0; 0 20; 0 0"
                        begin="0.4s" dur="0.7s" repeatCount="indefinite" />
                </rect>
                <rect x="20" y="0" width="4" height="10" fill="#333">
                    <animateTransform attributeType="xml"
                        attributeName="transform" type="translate"
                        values="0 0; 0 20; 0 0"
                        begin="0.5s" dur="0.7s" repeatCount="indefinite" />
                </rect>
            </svg>
        </div>
    );
};

export default SvgCargando;