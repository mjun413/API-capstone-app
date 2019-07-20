'use strict';

const apiKey = "522bb96699a171f68a6a7c0c367ee445"
const searchURL = 'https://developers.zomato.com/api/v2.1';

function displayResults(myJson) {
  $('#results-list').empty();
  $('#result-number').empty();
  if (myJson.results_found === 0) {
      $('#results-list').append(`Sorry, no result is found.`);
  } else {
      for (let i = 0; i < myJson.restaurants.length; i++) {
        $('#results-list').append(
          `<li class="list-items"><h3>${myJson.restaurants[i].restaurant.name}</h3>`);
        $('#results-list').append( 
          `<p>${myJson.restaurants[i].restaurant.location.city}</p>
           <p>${myJson.restaurants[i].restaurant.user_rating.aggregate_rating}/5</p>
           <img src="${myJson.restaurants[i].restaurant.thumb}" alt="restaurant-thumb-img">
           <p>Cuisine: ${myJson.restaurants[i].restaurant.cuisines}</p>
           <p>${myJson.restaurants[i].restaurant.location.address}</p>
           <p>${myJson.restaurants[i].restaurant.phone_numbers}</p>
           <p>${myJson.restaurants[i].restaurant.timings}</p>
           <p><a href="${myJson.restaurants[i].restaurant.menu_url}">Menu</a></p>`);
        $('#results-list').append(`</li><hr>`);
      }
  }
  $('#results').removeClass('hidden');
};

function getGeoCode(searchLocation) {
  let url = searchURL + encodeURI(`/locations?query=${searchLocation}`);
  return fetch(url, {
    headers: {
      'user-key': apiKey
    },
    mode:'cors'
  }).then(function(response) {
    return response.json();
  }).then(function(myJson) {
    return {
      'entity_type': myJson['location_suggestions'][0].entity_type,
      'entity_id': myJson['location_suggestions'][0].entity_id
    };
  });
}

function getResult(searchName, geoData) {
  let url = searchURL + encodeURI(`/search?entity_id=${geoData['entity_id']}&entity_type=${geoData['entity_type']}&q=${searchName}`);
  return fetch(url, {
    headers: {
      'user-key': apiKey
    },
    mode:'cors'
  }).then(function(response) {
    return response.json();
  });
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    const searchName = $('#js-search-name').val();
    const searchLocation = $('#js-search-location').val();

    let geoDataPromise = getGeoCode(searchLocation);
    geoDataPromise.then(function(geoData) {
      let resultPromise = getResult(searchName, geoData);
      resultPromise.then(function(resultData) {
        displayResults(resultData);
      });
    });
  });
}

$(watchForm);
