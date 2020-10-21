const MainArea = {
    template:
        `
<div class="cotainer-fluid">
                <h1 class="main-title">Valar Morghulis...</h1>
                <h2 class="main-subtitle">Who's next?</h2>
                
                <div class="row">
                    <div class="text-center text-md-left" id="quote-area">
                        <div class="spinner-container">
                            <div class="spinner-grow red-spinner" role="status">
                                <span class="sr-only">Loading...</span>
                            </div>
                        </div>
                        <ul class="quote-list">
                            <li> </li>
                        </ul>
                    </div>    
                    <div class="col-12">
                        <div class="ch-body d-flex flex-column">
                            <div class="body-row head-row d-flex justify-content-center">
                                <PartSelector 
                                            :parts="fileParts.heads"
                                            :rand="randomHead" 
                                            @randomInvoked="invoked=>randomHead = !invoked"
                                            @partSelected="part => partSelected(part)" />
                            </div>
                            <div class="body-row middle-row d-flex justify-content-center">
                                <PartSelector 
                                            :parts="fileParts.middles"
                                            :rand="randomMiddle"
                                            @randomInvoked="invoked=>randomMiddle = !invoked"/>
                            </div>
                            <div class="body-row foot-row d-flex justify-content-center">
                                <PartSelector 
                                            :parts="fileParts.foots"
                                            :rand="randomFoot"
                                            @randomInvoked="invoked=>randomFoot = !invoked"/>
                            </div>
                        </div>

                        <div class="btn-area d-flex justify-content-center">
                            <div class="btn-container d-flex justify-content-between">
                                <button class="btn btn-light" @click="randomAll">Random</button>
                                <button id="about" class="btn btn-light">About</button>
                                <button class="btn btn-light">Download</button>
                            </div>
                        </div>

                    </div>
                    <div id="about-area"> <!-- DescArea -->
                    <div class="spinner-container">
                        <div class="spinner-grow red-spinner" role="status">
                            <span class="sr-only">Loading...</span>
                        </div>
                    </div>
                    <div class="text-center text-md-left">
                        <p class="about-p"> <b> Name: </b>  </p>
                        <p class="about-p"> <b> Born: </b> </p>
                        <p class="about-p"> <b> Culture: </b> </p>
                        <p class="about-p"> <b> Titles: </b> </p>
                        <ul class="about-titles">
                            <li>  </li>
                        </ul>
                    </div>
                </div>
                </div>
            </div>
`,
    data() {
        return {
            fileParts: bodies,
            randomHead: false,
            randomMiddle: false,
            randomFoot: false,
            selectedCharId: 1,
            selectedParts: {
                head: {},
                middle: {},
                foot: {}
            }
        }
    },
    components: {
        PartSelector
    },
    methods: {
        randomAll: function(){
            this.randomHead = true
            this.randomMiddle = true
            this.randomFoot = true
        },
        partSelected: function(part){
            if (part.type = "heads"){
                this.selectedParts.head = part
                this.selectedCharId = part.id
            }
            if (part.type = "middles"){
                this.selectedParts.middle = part
            }
            if (part.type = "foots"){
                this.selectedParts.foot = part
            }
        }
    }
}