export default [
    {
        className: 'Original',
        html: ``,
        css: ``,
    },
    {
        className: 'Grid-1',
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
        className: 'Grid-2',
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
            "leftSide leftSide upperMid upperMid upperMid upperMid rightSide rightSide"
            "leftSide leftSide lowerMid lowerMid lowerMid lowerMid rightSide rightSide"
            "footer footer footer footer footer footer footer footer";
            grid-gap: 30px;
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
]