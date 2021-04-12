$(_ => {
  $('#form').submit(_ => {
    const 
      url = $('#url').val(),
      title = $('#title').val(),
      category = $('#category').val();

    $('#links')
      .append(`<li><a href="${url}">${title}</a></li>`);

    return false;
  });
});