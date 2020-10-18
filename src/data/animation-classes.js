export default [
    {
        className: 'original',
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