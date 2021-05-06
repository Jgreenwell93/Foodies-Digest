var repoNameEl = document.querySelector('#recipe-name');
var issueContainerEl = document.querySelector('#issues-container');
var limitWarningEl = document.querySelector('#limit-warning');

var getRepoName = function () {
  var queryString = document.location.search;
  // var recipeID = queryString.split('=')[1];
  let params = new URLSearchParams(queryString);
  let recipeID = parseInt(params.get("id")); 
  let recipeTitle = params.get("title")

  if (recipeID) {
    repoNameEl.textContent = recipeTitle;

    getRepoIssues(recipeID);
  } else {
    document.location.replace('./fetches.html');
  }
};

var getRepoIssues = function (recipeID) {
  var apikey = 'a8fa9c6592244caeb366aac4bd3ddb69'
  var apiUrl = 'https://api.spoonacular.com/recipes/' + recipeID + '/analyzedInstructions' + '?apiKey=' + apikey;

  fetch(apiUrl).then(function (response) {
    if (response.ok) {
      response.json().then(function (data) {
        displayRecipe(data);

        if (response.headers.get('Link')) {
          displayWarning(recipeName);
        }
      });
    } else {
      // document.location.replace('./fetches.html');
    }
  });
};

var displayRecipe = function (recipeData) {

  // for (var i = 0; i < recipeData.length; i++) {
  //   var recipeStepEl = document.createElement('p');
  //   issueEl.classList = 'list-item flex-row justify-space-between align-center';

  //   var titleEl = document.createElement('span');
  //   titleEl.textContent = recipeData.title;
  //   issueEl.appendChild(titleEl);

  //   var typeEl = document.createElement('span');

  //   if (issues[i].pull_request) {
  //     typeEl.textContent = '(Pull request)';
  //   } else {
  //     typeEl.textContent = '(Issue)';
  //   }

  //   issueEl.appendChild(typeEl);

  //   issueContainerEl.appendChild(issueEl);
  // }
};

var displayWarning = function (repo) {
  limitWarningEl.textContent = 'To see more than 30 issues, visit ';

  var linkEl = document.createElement('a');
  linkEl.textContent = 'GitHub.com';
  linkEl.setAttribute('href', 'https://github.com/' + repo + '/issues');
  linkEl.setAttribute('target', '_blank');

  limitWarningEl.appendChild(linkEl);
};

getRepoName();
