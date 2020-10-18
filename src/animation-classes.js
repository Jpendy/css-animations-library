export default [
    {
        className: 'original',
        code: `code code code`
    },
    {
        className: 'red-background',
        code: ``
    },
    {
        className: 'blue-background',
        code: ``
    },
    {
        className: 'radiate',
        code: `.radiate {
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
        code: `.spin {
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