import "./navbar-item.js"

class NavbarList extends HTMLElement {
    set navbarLinks(navbarLinks){
        console.log('set');
        this._navbarLinks = navbarLinks;
        this.render();
    }

  

    

    render(){
        this._navbarLinks.forEach(navbarLink =>{
            const navbarItemElement = document.createElement("navbar-item");
            navbarItemElement.navbarLink = navbarLink;
            this.appendChild(navbarItemElement);
        })
        const new_html = 
        `
        <div class = "logo">
            <h1 tabindex = "0">ROKU</h1>
        </div> 

        <div class="burger" tabindex  = "0"  role="button" aria-label="To Navigation Button">
        <div class="line1"></div>
        <div class="line2"></div>
        <div class="line3"></div>
        </div>
            <ul class = 'nav-links'>
                ${this.innerHTML}
            </ul>
    
       
        `;
        
        this.innerHTML = new_html;
    }
}

customElements.define("navbar-list", NavbarList)