$(function () {
  var hash = window.location.hash;
  hash && $('.topPillars.nav a[href="' + hash + '"]').tab('show');

  $(".nav-tabs a[data-toggle='tab']").click(function (e) {
    e.preventDefault();
    e.stopImmediatePropagation();
    $(this).tab('show');
  });
});


