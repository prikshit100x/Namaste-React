        const heading = React.createElement("h1",{
            id:"heading" , xyc :"abc"
        },"Hello world from react!")
    //    this emplty obj use to give attribue to tags
    //h1 is a react object
    // props are arguments passed in react components
        const root = ReactDOM.createRoot(document.getElementById('root'))
       // root.render(heading) // render is responsible to convert that obj to h1 tag



       /* 
        <div id="parent">
        <div id="child">
        <h1></h1>
        </div>
        </div> 
            */




        const parent =React.createElement("div",
            {id:"parent"},
             React.createElement(
                'div',
                {id:"child"},
                React.createElement('h1',{},"i am an h1 tag"),
                React.createElement('h2',{},"i am an h2 tag")
        ))

            root.render(parent)