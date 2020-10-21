const NavComponent = {
    
    data(){
        return{
            navUl:[
                {
                    id:1,
                    htmlId: 'nav-1',
                    ahref: '/',
                    text: 'Chareacters' 
                }
            ]
        }
    },
    template: `
    <nav class="navbar">
        <a href="./" class="nav-logo navbar-brand">
            <img class="got-logo" alt="Game of Thrones" src="./assets/got-logo-200x88.png"/>
        </a>
                
        <ul class="nav justify-content-end">
            <li v-for='nav in navUl'  class="nav-item" :id="nav.htmlId">                
                <a class="nav-link" :href="nav.ahref"> {{ nav.text }}</a>
            </li>
        </ul>
    </nav>
    `
} 


