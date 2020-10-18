export default [
    {
        className: 'Original',
        html: ``,
        css: `code code code`,
    },
    {
        className: 'Radiate',
        html: `
        <div class="radiate box"></div>
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
        className: 'Spin',
        html: `
        <div class="spin box"></div>
        `,
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
    {
        className: 'Flickering-flame',
        html: `
        <div class="black-background" > 
            <div class="flame-wrapper">
                <div class="flame flame-red"></div>
                <div class="flame flame-orange"></div>
                <div class="flame flame-gold"></div>
                <div class="flame flame-white"></div>
                <div class="base flame-blue"></div>
                <div class="base flame-black"></div>
            </div>
        </div>
        `,
        css: `
        .black-background {
            height: 250px;
            width: 250px;
            display: grid;
            justify-content: center;
            align-items: center;
            border-radius: 50%;
            background: black;
        }
        .flame-red {
            width: 80px;
            height: 80px;
            background: orangered;
            box-shadow: 0px 0px 10px 5px orangered;
        }
        .flame-orange {
            left: 10px;
            width: 60px;
            height: 60px;
            background: orange;
            box-shadow: 0px 0px 12px 6px orange;
        }
        .flame-gold {
            left: 18px;
            width: 45px;
            height: 45px;
            background: gold;
            box-shadow: 0px 0px 9px 4px gold;
        }
        .flame-white {
            left: 22px;
            width: 35px;
            height: 35px;
            background: lightyellow;
            box-shadow: 0px 0px 9px 4px lightyellow;
        }
        .flame-blue {
            left: 32px;
            width: 15px;
            height: 15px;
            background: darkblue;
            box-shadow: 0px 0px 15px 10px darkblue;
        }
        .flame-black {
            left: 20px;
            width: 40px;
            height: 40px;
            bottom:-50px;
            background: black;
            box-shadow: 0px 0px 15px 10px black;
        }
        .base {
            border-radius: 50%;
            position: absolute;
        }
        .flame-wrapper {
            background: black;
            position: relative;
            animation: flicker 3ms ease-in infinite;
            top: 20%;
            left: -38px;
        }
        .flame {
            bottom: 0;
            position: absolute;
            border-radius: 50% 0% 50% 50%;
            transform: rotate(-45deg);
        }
        @keyframes flicker {
            0% {transform: rotate(-1deg);}
            20% {transform: rotate(2deg) scaleY(1.05);}
            40% {transform: rotate(-1deg);}
            60% {transform: rotate(1deg);}
            80% {transform: rotate(-1deg) scaleY(0.90);}
            100% {transform: rotate(1deg);}
        }
        `
    },
]