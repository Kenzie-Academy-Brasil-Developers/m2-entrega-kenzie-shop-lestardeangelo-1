import Dados from "./requisiscao.js";

const objeto = await Dados.getApi();

const container = document.querySelector('#containerPrincipal');

class Vitrine {

    static elementos(){

        const ul = document.createElement('ul');

        objeto.products.forEach((produto) => {

            const li       = document.createElement('li');
            const img      = document.createElement('img');
            const imageUrl = `https://kenzie-academy-brasil.gitlab.io/fullstack/frontend/modulo2/sprint3/img/consumindo-api-produtos/${produto.id}/Image.png`
            const star     = document.createElement('span');
            const p        = document.createElement('p');
            const span     = document.createElement('span');
            const promo    = document.createElement('span')
            const button   = document.createElement('button');
    
            // Adicionando dados do produto aos elementos
            img.src             = imageUrl;
            p.innerText         = produto.productName;
            if(produto.promotionStatus){
                span.innerText  = `De: R$${produto.price.productPrice}`;
                promo.innerText = `Por: R$${produto.price.productPromotionPrice}`;

                span.classList.add('promo')
                star.classList.add('star')

                li.appendChild(img);
                li.appendChild(star);
                li.appendChild(p);
                li.appendChild(span);
                li.appendChild(promo);
                li.appendChild(button);
                
            }else{
                span.innerText  = `R$${produto.price.productPrice}`

                star.classList.add('star')
                
                li.appendChild(img);
                li.appendChild(star);
                li.appendChild(p);
                li.appendChild(span);
                li.appendChild(button);
            }
            button.innerText    = "COMPRAR";
            let avalia = ''
            for(let i =0; i < produto.reviews; i++){
                avalia += '⭐'
            }
            star.innerText      = avalia;

            // Adicionando li ao HTML
            ul.appendChild(li);

        });

        container.appendChild(ul);
    }

}

export {Vitrine}