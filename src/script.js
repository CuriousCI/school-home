const sites = [
  {
    url: 'https://app.diagrams.net/',
    title: 'draw.io',
    category: 'design'
  }
];

function updateSiteList(list, sites) {
  $(list).empty();

  sites.forEach(site => 
    $(list).append(
      $('<li>').append(
        $('<a>')
          .attr('href', site.url)
          .text(site.title)
      )
    )
  );

};

$(_ => 
  $('#form').submit(event => {
    event.preventDefault();
    sites.push({
      url: $('#url').val(),
      title: $('#title').val(),
      category: $('#category').val()
    });

    updateSiteList('#links', sites);
  })
);