function apagar(id) {
    $.ajax({
        url: `/remove/${id}`,
        type: 'DELETE',
    }).done(function(msg){
        console.log(msg);
        window.location.href = '/'
    }).fail(function (msg){
        console.log(msg);
    })
}