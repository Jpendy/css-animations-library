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
            <div class="grid-box grid-1-box-1">1</div>
            <div class="grid-box grid-1-box-2">2</div>
            <div class="grid-box grid-1-box-3">3</div>
            <div class="grid-box grid-1-box-4">4</div>
        </div>
        `,
        css: `
        .grid-box {
            display: grid;
            text-align: center;
            border: 1px solid black;
        }

        .grid-1-container{
            height: 800px;
            width: 1400px;
            background: lightcyan;
            padding: 40px;
            display: grid;
            justify-content: center;
            grid-template-columns: repeat(3, 1fr);
            grid-gap: 30px;
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
        }
        `
    },
    {
        className: 'Grid-2',
        html: `
        <div class="grid-2-container" >
            <div class="grid-box grid-2-box-1"> </div>
            <div class="grid-box grid-2-box-2"> </div>
            <div class="grid-box grid-2-box-3"> </div>
            <div class="grid-box grid-2-box-4"> </div>
            <div class="grid-box grid-2-box-5"> </div>
            <div class="grid-box grid-2-box-6"> </div>
        </div>
        `,
        css: `
        .grid-box {
            display: grid;
            text-align: center;
            border: 1px solid black;
        }

        .grid-2-container {
            height: 800px;
            width: 1400px;
            background: lightcyan;
            padding: 40px;
            display: grid;
            grid-template-columns: repeat(8, 1fr);
            grid-template-areas: 
            "header header header header header header header header"
            "leftSide leftSide upperMid upperMid upperMid upperMid rightSide rightSide"
            "leftSide leftSide lowerMid lowerMid lowerMid lowerMid rightSide rightSide"
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
        }
        `
    },
    {
        className: 'Grid-3',
        html: `
        <div class="grid-3-container" >
            <div class="blue grid-box grid-3-box-1">1</div>
            <div class="yellow grid-box grid-3-box-2">2</div>
            <div class="lightgreen grid-box grid-3-box-3">3</div>
            <div class="orchid grid-box grid-3-box-4">4</div>
        </div>
        `,
        css: `
        .grid-box {
            display: grid;
            text-align: center;
            border: 1px solid black;
        }

        .grid-3-container {
            height: 800px;
            width: 1400px;
            background: lightcyan;
            padding: 40px;
            grid-gap: 30px;
        }

        .grid-3-box-1 {
            grid-column: 1 / span 2
        }

        .grid-3-box-2 {
            grid-column: 3 / span 1;     
            grid-row: 1 / span 2
        }

        .grid-3-box-3 {
            grid-column: 1 / span 1
        }

        .grid-3-box-4 {
            grid-column: 2 / span 1
        }
        `
    },
    {
        className: 'Grid-4',
        html: `
        <div class="grid-4-container" >
            <div class="blue grid-box grid-4-box-1">1</div>
            <div class="yellow grid-box grid-4-box-2">2</div>
            <div class="lightgreen grid-box grid-4-box-3">3</div>
            <div class="orchid grid-box grid-4-box-4">4</div>
            <div class="orange grid-box grid-4-box-5">5</div>

        </div>
        `,
        css: `
        .grid-box {
            display: grid;
            text-align: center;
            border: 1px solid black;
        }

        .grid-4-container {
            height: 800px;
            width: 1400px;
            background: lightcyan;
            padding: 40px;
            grid-gap: 30px;
        }
        
        .grid-4-box-1 {
            grid-column: 1 / span 4
        }
        
        .grid-4-box-2 {
            grid-column: 1 / span 2;
            grid-row: 2 / span 2
        }
        
        .grid-4-box-3 {
            grid-column: 3 / span 2;
            grid-row: 2 / span 1
        }
        
        .grid-4-box-4 {
            grid-column: 3 / span 1;
            grid-row: 3 / span 1
        }
        
        .grid-4-box-5 {
            grid-column: 4 / span 1;
            grid-row: 3 / span 1
        }
        `
    },
]