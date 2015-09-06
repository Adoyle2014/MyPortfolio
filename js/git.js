jQuery.githubUser = function(username, callback) {
    jQuery.getJSON('https://api.github.com/users/'+username+'/repos?callback=?',callback)
}

jQuery.fn.loadRepositories = function(username) {
    this.html("<span>Querying GitHub for " + username +"'s repositories...</span>");

    var target = this;
    $.githubUser(username, function(data) {
        var repos = data.data; // JSON Parsing
        sortByName(repos);

        var list = $('<dl/>');
        target.empty().append(list);
        $(repos).each(function() {
            if (this.name != (username.toLowerCase()+'.github.com')) {
                if (this.fork == true) {
                    list.append('<dt><img src="img/fork.png"><a href="' + (this.homepage ? this.homepage : this.html_url) + '">' + this.name + '</a> <em>' + (this.language ? ('(' + this.language + ')') : '') + '</em></dt>');
                    list.append('<dd>' + this.description + '</dd>');
                    list.append('<hr>');
                } else {
                    list.append('<dt><img src="img/book.png"><a href="' + (this.homepage ? this.homepage : this.html_url) + '">' + this.name + '</a> <em>' + (this.language ? ('(' + this.language + ')') : '') + '</em></dt>');
                    list.append('<dd>' + this.description + '</dd>');
                    list.append('<hr>');
                }
            }
        });
    });

    function sortByName(repos) {
        repos.sort(function(a,b) {
            return a.name - b.name;
        });
    }
};
