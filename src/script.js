const sites = [
  {
    url: 'https://app.diagrams.net/',
    title: 'draw.io',
    category: 'drawing'
  }
];

function displaySiteList(sites) {
  $('#links').empty();

  sites.forEach(site => 
    $('#links').append(
      $('<li>').append(
        $('<a>')
          .attr('href', site.url)
          .text(site.title)
      )
    )
  );

};

$(_ => {
  $('#form').submit(event => {
    event.preventDefault();
    sites.push({
      url: $('#url').val(),
      title: $('#title').val(),
      category: $('#category').val(),
    });

    displaySiteList(sites);
  });
});