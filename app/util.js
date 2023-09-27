'use strict';

const util = {};

util.parseCandidateNames = candidates => {
  return candidates.trim().split('\n').map((s) => s.trim()).filter((s) => s !== "");
}

util.doConfirm = str => {
  return window.confirm(str);
}

module.exports = util;
