import React from 'react';

/*Componente Seccion compra aqui*/
    const Section4 = () => {
            return (
            <section className="section" id="seccion4">
                <h1 style={{ textAlign: "center" }}>Compra Aquí</h1>
                
                <div className="product-grid">
                    <div className="product-item">
                        <img src="https://images.pexels.com/photos/6311574/pexels-photo-6311574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt=""
                        />
                        <div className="description">Polerón Negro Mossimo</div>
                        <div className="price">$3.000</div>
                    </div>
                    <div className="product-item">
                        <img src="https://images.pexels.com/photos/6310924/pexels-photo-6310924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt=""
                        />
                        <div className="description">Polerón Beige Mossimo</div>
                        <div className="price">$2.500</div>
                    </div>
                    <div className="product-item">
                        <img src="https://images.pexels.com/photos/6311662/pexels-photo-6311662.jpeg?auto=compress&cs=tinysrgb&w=600"
                            alt=""
                        />
                        <div className="description">Polerón Lila Mossimo</div>
                        <div className="price">$3.400</div>
                    </div>
                </div>
            </section>
        );
    };
    
    export default Section4;