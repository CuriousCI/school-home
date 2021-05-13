let sites = [];
let categories = ['tecnologia', 'arte', 'sport', 'moda', 'istruzione'];
let category = 'none';

function displayList(list, sites, category) {
  list.empty();

  sites
    .filter(site => 
      site.category == category || category === 'none' // All
    )
    .map(site => 
      $('<li>')
        .append(
          $('<a>')
            .attr('href', site.url)
            .text(site.title)
        )
        .append(
          $('<span>')
            .text(`#${site.category}`)
        )
        .append(
          $('<img>')
            .attr('src', 'assets/delete.png')
            .attr('alt', 'trash icon')
            .data('id', site.id)
            .addClass('icon')
        )
    )
    .reduce((list, item) => list.append(item), list)
};

function addOptions(select, options){
  options
    .map(
      category => 
        $('<option>')
          .attr('value', category)
          .text(category)
    )
    .reduce(
      (select, category) => select.append(category), 
      select
    )
}

$(_ => {
  addOptions($('#category'), categories)
  addOptions($('#filter-category'), ['none', ...categories])

  $('#creator').submit(event => {
    event.preventDefault();

    sites.push({
      id: Math.floor(Math.random() * 100000),
      url: $('#url').val(),
      title: $('#title').val(),
      category: $('#category').val()
    });

    displayList($('#links'), sites, category);

    $('#creator').each(function() { 
      this.reset(); 
    });
  })

  $('#links').on('click', '.icon', function() {
    const id = $(this).data('id');
    sites = sites.filter(site => site.id != id);

    displayList($('#links'), sites, category);
  });

  $('#filter').submit(event => {
    event.preventDefault();
    category = $("#filter-category").val();

    displayList($('#links'), sites, category);
  });
});