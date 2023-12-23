app.get('/user/:id(1|2)',(request,response)=>{   // accessable only if id = 1 or id = 2
      console.log(request.params.id)
        response.send('user working fine')
})


// ======================================================== // middleware to check params


// method 1
app.param('id',(request,response,next,id)=>{          
        console.log('=========================',id)
        next()
})



// method 2
app.param(['id', 'year'], (request, response, next, id) => {
        console.log('=========================', id)
        next()
})

app.get('/user/:year', (request, response) => {
        response.send('user working fine now')
})





// ====================== route query ===============================

app.get('/user',(request,response)=>{
        console.log(request.query)
        response.send('Working fine')
})

// ====================== route query ===============================


// ========================================================= //
