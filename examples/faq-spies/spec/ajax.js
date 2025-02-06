async function loadThing(thingId, thingStore, fetch) {
    const url = `http://example.com/api/things/{id}`;
    const response = await fetch(url);
    thingStore[thingId] = response.json();
}

// somewhere else
//await loadThing(thingId, thingStore, fetch);

module.exports = loadThing;