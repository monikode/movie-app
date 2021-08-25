exports.handler = function (event, context, callback) {
  try {
    let response = await fetch(
    //   "https://api.airtable.com/v0/<account id>/<table name>"
    );
    let data = await response.json();
    await pass(data);
  } catch (err) {
    let error = {
      statusCode: err.statusCode || 500,
      body: JSON.stringify({ error: err.message }),
    };
    await pass(error);
  }
};
