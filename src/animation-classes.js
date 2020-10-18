export default [
    {
        className: 'original',
        css: `code code code`
    },
    {
        className: 'grid-1',
        html: `
        <div class="grid-1-container" >
            <div class="grid-1-box-1"> </div>
            <div class="grid-1-box-2"> </div>
            <div class="grid-1-box-3"> </div>
            <div class="grid-1-box-4"> </div>
        </div>
        `,
        css: `.grid-1-container{
            width: 1000px;
            height: 1000px;
            display: grid;
            justify-content: center;
            grid-template-columns: repeat(3, 1fr);
            grid-gap: 20px;
        }
        
        .grid-1-box-1 {
            grid-column: 1/2;
            background: blue;
        }
        
        .grid-1-box-2 {
            grid-column: 2/4;
            background: green;
        }
        
        .grid-1-box-3 {
            grid-column: 1/3;
            background: yellow;
        }
        
        .grid-1-box-4 {
            grid-column: 3/4;
            background: red;
        }`
    },
    {
        className: 'grid-2',
        html: `
        <div class="grid-2-container" >
            <div class="grid-2-box-1"> </div>
            <div class="grid-2-box-2"> </div>
            <div class="grid-2-box-3"> </div>
            <div class="grid-2-box-4"> </div>
            <div class="grid-2-box-5"> </div>
            <div class="grid-2-box-6"> </div>
        </div>
        `,
        css: `.grid-2-container {
            height: 100%;
            width: 100%;
            display: grid;
            grid-template-columns: repeat(8, 1fr);
            grid-template-areas: 
            "header header header header header header header header"
            "leftSide upperMid upperMid upperMid upperMid upperMid upperMid rightSide"
            "leftSide lowerMid lowerMid lowerMid lowerMid lowerMid lowerMid rightSide"
            "footer footer footer footer footer footer footer footer";
            grid-gap: 20px;
        }
        
        .grid-2-box-1 {
            grid-area: header;
            background: orange;
        }
        .grid-2-box-2 {
            grid-area: leftSide;
            background: green;
        }
        .grid-2-box-3 {
            grid-area: rightSide;
            background: red;
        }
        .grid-2-box-4 {
            grid-area: upperMid;
            background: orchid;
        }
        .grid-2-box-5 {
            grid-area: lowerMid;
            background: lime;
        }
        .grid-2-box-6 {
            grid-area: footer;
            background: lightseagreen;
        }`
    },
    {
        className: 'divs',
        html: `<div class="div-1 thing" >1</div>
               <div class="div-2 thing" >2</div>
               <div class="div-3 thing" >3</div>
               <div class="div-4 thing" >4</div>`,
        css: `code code code`
    },
    {
        className: 'wobble',
        css: `.wobble {
            animation: wobble 2s linear infinite;
        }

        @keyframes wobble {
            20% {
            transform: translateX(-50px);
            transform: scale(1.2)
            }
            40% {
                transform: translateY(-50px);
                transform: scale(.4);
            }
            55% {
                transform: translateX(200px);
            } 
            70% {
                transform: scale(.4);
            }
            80% {
                transform: translateY(-50px);
        
            }
        }`
    },
    {
        className: 'blue-background',
        css: ``
    },
    {
        className: 'radiate',
        html: `
        <div class="radiate main-element">1</div>
        `,
        css: `.radiate {
            animation: radiate 1.5s infinite ease-in-out;
        }

        @keyframes radiate {
            0% {
            filter: drop-shadow(3px 10px 10px rgba(225, 221, 221, .6)); 
            }
            30% {
                filter: drop-shadow(3px 10px 5px rgba(140, 219, 50, 0.932)); 
            }
            50% {
                filter: drop-shadow(3px 10px 20px rgba(49, 96, 252, 0.8)); 
            }
            65% {
                filter: drop-shadow(3px 10px 2px rgb(202, 38, 38)); 
            }
            80% {
                filter: drop-shadow(3px 10px 30px rgba(34, 141, 1, 0.9)); 
            }
        }`
    },
    {
        className: 'spin',
        css: `.spin {
            animation: spin 20s infinite linear;

            @keyframes spin {
                from {
                  transform: rotate(0deg);
                }
                to {
                  transform: rotate(360deg);
                }
              }
        }`
    },
]