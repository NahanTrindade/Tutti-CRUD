function apagar(id) {
    $.ajax({
        url: `/remove/${id}`,
        type: 'DELETE',
    }).done(function(){
        window.location.href = '/'
    })
}
