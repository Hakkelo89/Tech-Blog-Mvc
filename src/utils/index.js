const getPlain = (records) =>
  records.map((record) => record.get({ plain: true }));

module.exports = { getPlain };
