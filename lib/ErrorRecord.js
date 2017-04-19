/**
 * hound-api-client
 * 
 *
 * OpenAPI spec version: 1.0.0
 * Contact: towyuan@outlook.com
 *
 * NOTE: This library is auto generated by the Open API Codegen program.
 * https://github.com/taoyuan/generator-oac.git
 * Do not edit the class manually.
 *
 */

const utils = require('./_utils');

/*jshint -W069 */
/**
 * @class ErrorRecord
 * @alias module:api/ErrorRecord
 * @param {Requestor} [requestor] - The project domain or options object. If object, see the object's optional properties.
 */
class ErrorRecord {
  constructor(requestor) {
    this.requestor = requestor;
  }
  /**
   * Create a new instance of the model and persist it into the data source.
   *
   * @method
   * @path [POST] /ErrorRecords
   * @name ErrorRecord#create
   * @param {object|function|*} [opts] - Optional params
   * @param {object} [opts.data] - Model instance data
   * @param {function} [cb] - Callback function
   */
  create(opts, cb) {
    if (typeof opts === 'function') {
      cb = opts;
      opts = null;
    }
    opts = opts || {};

    const req = {
      method: 'POST',
      headers: {}
    };

    req.headers['Accept'] = 'application/json';

    req.data = opts['data'];

    const path = '/ErrorRecords';

    return this.requestor.request(path, req).then(function(result) {
      if (!cb) return result;
      cb(result);
    }, function(err) {
      if (!cb) throw err;
      cb(null, err);
    });
  }
  /**
   * Patch an existing model instance or insert a new one into the data source.
   *
   * @method
   * @path [PATCH] /ErrorRecords
   * @name ErrorRecord#patchOrCreate
   * @param {object|function|*} [opts] - Optional params
   * @param {object} [opts.data] - Model instance data
   * @param {function} [cb] - Callback function
   */
  patchOrCreate(opts, cb) {
    if (typeof opts === 'function') {
      cb = opts;
      opts = null;
    }
    opts = opts || {};

    const req = {
      method: 'PATCH',
      headers: {}
    };

    req.headers['Accept'] = 'application/json';

    req.data = opts['data'];

    const path = '/ErrorRecords';

    return this.requestor.request(path, req).then(function(result) {
      if (!cb) return result;
      cb(result);
    }, function(err) {
      if (!cb) throw err;
      cb(null, err);
    });
  }
  /**
   * Replace an existing model instance or insert a new one into the data source.
   *
   * @method
   * @path [PUT] /ErrorRecords
   * @name ErrorRecord#replaceOrCreate
   * @param {object|function|*} [opts] - Optional params
   * @param {object} [opts.data] - Model instance data
   * @param {function} [cb] - Callback function
   */
  replaceOrCreate(opts, cb) {
    if (typeof opts === 'function') {
      cb = opts;
      opts = null;
    }
    opts = opts || {};

    const req = {
      method: 'PUT',
      headers: {}
    };

    req.headers['Accept'] = 'application/json';

    req.data = opts['data'];

    const path = '/ErrorRecords';

    return this.requestor.request(path, req).then(function(result) {
      if (!cb) return result;
      cb(result);
    }, function(err) {
      if (!cb) throw err;
      cb(null, err);
    });
  }
  /**
   * Find all instances of the model matched by filter from the data source.
   *
   * @method
   * @path [GET] /ErrorRecords
   * @name ErrorRecord#find
   * @param {object|function|*} [opts] - Optional params
   * @param {string} [opts.filter] - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
   * @param {function} [cb] - Callback function
   */
  find(opts, cb) {
    if (typeof opts === 'function') {
      cb = opts;
      opts = null;
    }
    opts = opts || {};

    const req = {
      method: 'GET',
      headers: {}
    };

    req.headers['Accept'] = 'application/json';

    req.params = {
      filter: opts['filter'],
    };

    const path = '/ErrorRecords';

    return this.requestor.request(path, req).then(function(result) {
      if (!cb) return result;
      cb(result);
    }, function(err) {
      if (!cb) throw err;
      cb(null, err);
    });
  }
  /**
   * Replace an existing model instance or insert a new one into the data source.
   *
   * @method
   * @path [POST] /ErrorRecords/replaceOrCreate
   * @name ErrorRecord#replaceOrCreateViaPost
   * @param {object|function|*} [opts] - Optional params
   * @param {object} [opts.data] - Model instance data
   * @param {function} [cb] - Callback function
   */
  replaceOrCreateViaPost(opts, cb) {
    if (typeof opts === 'function') {
      cb = opts;
      opts = null;
    }
    opts = opts || {};

    const req = {
      method: 'POST',
      headers: {}
    };

    req.headers['Accept'] = 'application/json';

    req.data = opts['data'];

    const path = '/ErrorRecords/replaceOrCreate';

    return this.requestor.request(path, req).then(function(result) {
      if (!cb) return result;
      cb(result);
    }, function(err) {
      if (!cb) throw err;
      cb(null, err);
    });
  }
  /**
   * Update an existing model instance or insert a new one into the data source based on the where criteria.
   *
   * @method
   * @path [POST] /ErrorRecords/upsertWithWhere
   * @name ErrorRecord#upsertWithWhere
   * @param {object|function|*} [opts] - Optional params
   * @param {string} [opts.where] - Criteria to match model instances
   * @param {object} [opts.data] - An object of model property name/value pairs
   * @param {function} [cb] - Callback function
   */
  upsertWithWhere(opts, cb) {
    if (typeof opts === 'function') {
      cb = opts;
      opts = null;
    }
    opts = opts || {};

    const req = {
      method: 'POST',
      headers: {}
    };

    req.headers['Accept'] = 'application/json';

    req.params = {
      where: opts['where'],
    };
    req.data = opts['data'];

    const path = '/ErrorRecords/upsertWithWhere';

    return this.requestor.request(path, req).then(function(result) {
      if (!cb) return result;
      cb(result);
    }, function(err) {
      if (!cb) throw err;
      cb(null, err);
    });
  }
  /**
   * Check whether a model instance exists in the data source.
   *
   * @method
   * @path [GET] /ErrorRecords/{id}/exists
   * @name ErrorRecord#exists
   * @param {string} id - Model id
   * @param {function} [cb] - Callback function
   */
  exists(id, cb) {
    // verify the required parameter 'id' is set
    if (id === undefined || id === null) {
      throw new Error("Missing the required parameter 'id' when calling exists");
    }

    const req = {
      method: 'GET',
      headers: {}
    };

    req.headers['Accept'] = 'application/json';

    const path = utils.buildPath('/ErrorRecords/{id}/exists', {
      id: id,
    });

    return this.requestor.request(path, req).then(function(result) {
      if (!cb) return result;
      cb(result);
    }, function(err) {
      if (!cb) throw err;
      cb(null, err);
    });
  }
  /**
   * Check whether a model instance exists in the data source.
   *
   * @method
   * @path [HEAD] /ErrorRecords/{id}
   * @name ErrorRecord#existsViaHead
   * @param {string} id - Model id
   * @param {function} [cb] - Callback function
   */
  existsViaHead(id, cb) {
    // verify the required parameter 'id' is set
    if (id === undefined || id === null) {
      throw new Error("Missing the required parameter 'id' when calling existsViaHead");
    }

    const req = {
      method: 'HEAD',
      headers: {}
    };

    req.headers['Accept'] = 'application/json';

    const path = utils.buildPath('/ErrorRecords/{id}', {
      id: id,
    });

    return this.requestor.request(path, req).then(function(result) {
      if (!cb) return result;
      cb(result);
    }, function(err) {
      if (!cb) throw err;
      cb(null, err);
    });
  }
  /**
   * Find a model instance by {{id}} from the data source.
   *
   * @method
   * @path [GET] /ErrorRecords/{id}
   * @name ErrorRecord#findById
   * @param {string} id - Model id
   * @param {object|function|*} [opts] - Optional params
   * @param {string} [opts.filter] - Filter defining fields and include - must be a JSON-encoded string ({"something":"value"})
   * @param {function} [cb] - Callback function
   */
  findById(id, opts, cb) {
    // verify the required parameter 'id' is set
    if (id === undefined || id === null) {
      throw new Error("Missing the required parameter 'id' when calling findById");
    }
    if (typeof opts === 'function') {
      cb = opts;
      opts = null;
    }
    opts = opts || {};

    const req = {
      method: 'GET',
      headers: {}
    };

    req.headers['Accept'] = 'application/json';

    req.params = {
      filter: opts['filter'],
    };

    const path = utils.buildPath('/ErrorRecords/{id}', {
      id: id,
    });

    return this.requestor.request(path, req).then(function(result) {
      if (!cb) return result;
      cb(result);
    }, function(err) {
      if (!cb) throw err;
      cb(null, err);
    });
  }
  /**
   * Replace attributes for a model instance and persist it into the data source.
   *
   * @method
   * @path [PUT] /ErrorRecords/{id}
   * @name ErrorRecord#replaceById
   * @param {string} id - Model id
   * @param {object|function|*} [opts] - Optional params
   * @param {object} [opts.data] - Model instance data
   * @param {function} [cb] - Callback function
   */
  replaceById(id, opts, cb) {
    // verify the required parameter 'id' is set
    if (id === undefined || id === null) {
      throw new Error("Missing the required parameter 'id' when calling replaceById");
    }
    if (typeof opts === 'function') {
      cb = opts;
      opts = null;
    }
    opts = opts || {};

    const req = {
      method: 'PUT',
      headers: {}
    };

    req.headers['Accept'] = 'application/json';

    req.data = opts['data'];

    const path = utils.buildPath('/ErrorRecords/{id}', {
      id: id,
    });

    return this.requestor.request(path, req).then(function(result) {
      if (!cb) return result;
      cb(result);
    }, function(err) {
      if (!cb) throw err;
      cb(null, err);
    });
  }
  /**
   * Delete a model instance by {{id}} from the data source.
   *
   * @method
   * @path [DELETE] /ErrorRecords/{id}
   * @name ErrorRecord#deleteById
   * @param {string} id - Model id
   * @param {function} [cb] - Callback function
   */
  deleteById(id, cb) {
    // verify the required parameter 'id' is set
    if (id === undefined || id === null) {
      throw new Error("Missing the required parameter 'id' when calling deleteById");
    }

    const req = {
      method: 'DELETE',
      headers: {}
    };

    req.headers['Accept'] = 'application/json';

    const path = utils.buildPath('/ErrorRecords/{id}', {
      id: id,
    });

    return this.requestor.request(path, req).then(function(result) {
      if (!cb) return result;
      cb(result);
    }, function(err) {
      if (!cb) throw err;
      cb(null, err);
    });
  }
  /**
   * Patch attributes for a model instance and persist it into the data source.
   *
   * @method
   * @path [PATCH] /ErrorRecords/{id}
   * @name ErrorRecord#patchAttributes
   * @param {string} id - ErrorRecord id
   * @param {object|function|*} [opts] - Optional params
   * @param {object} [opts.data] - An object of model property name/value pairs
   * @param {function} [cb] - Callback function
   */
  patchAttributes(id, opts, cb) {
    // verify the required parameter 'id' is set
    if (id === undefined || id === null) {
      throw new Error("Missing the required parameter 'id' when calling patchAttributes");
    }
    if (typeof opts === 'function') {
      cb = opts;
      opts = null;
    }
    opts = opts || {};

    const req = {
      method: 'PATCH',
      headers: {}
    };

    req.headers['Accept'] = 'application/json';

    req.data = opts['data'];

    const path = utils.buildPath('/ErrorRecords/{id}', {
      id: id,
    });

    return this.requestor.request(path, req).then(function(result) {
      if (!cb) return result;
      cb(result);
    }, function(err) {
      if (!cb) throw err;
      cb(null, err);
    });
  }
  /**
   * Replace attributes for a model instance and persist it into the data source.
   *
   * @method
   * @path [POST] /ErrorRecords/{id}/replace
   * @name ErrorRecord#replaceByIdViaPost
   * @param {string} id - Model id
   * @param {object|function|*} [opts] - Optional params
   * @param {object} [opts.data] - Model instance data
   * @param {function} [cb] - Callback function
   */
  replaceByIdViaPost(id, opts, cb) {
    // verify the required parameter 'id' is set
    if (id === undefined || id === null) {
      throw new Error("Missing the required parameter 'id' when calling replaceByIdViaPost");
    }
    if (typeof opts === 'function') {
      cb = opts;
      opts = null;
    }
    opts = opts || {};

    const req = {
      method: 'POST',
      headers: {}
    };

    req.headers['Accept'] = 'application/json';

    req.data = opts['data'];

    const path = utils.buildPath('/ErrorRecords/{id}/replace', {
      id: id,
    });

    return this.requestor.request(path, req).then(function(result) {
      if (!cb) return result;
      cb(result);
    }, function(err) {
      if (!cb) throw err;
      cb(null, err);
    });
  }
  /**
   * Find first instance of the model matched by filter from the data source.
   *
   * @method
   * @path [GET] /ErrorRecords/findOne
   * @name ErrorRecord#findOne
   * @param {object|function|*} [opts] - Optional params
   * @param {string} [opts.filter] - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
   * @param {function} [cb] - Callback function
   */
  findOne(opts, cb) {
    if (typeof opts === 'function') {
      cb = opts;
      opts = null;
    }
    opts = opts || {};

    const req = {
      method: 'GET',
      headers: {}
    };

    req.headers['Accept'] = 'application/json';

    req.params = {
      filter: opts['filter'],
    };

    const path = '/ErrorRecords/findOne';

    return this.requestor.request(path, req).then(function(result) {
      if (!cb) return result;
      cb(result);
    }, function(err) {
      if (!cb) throw err;
      cb(null, err);
    });
  }
  /**
   * Update instances of the model matched by {{where}} from the data source.
   *
   * @method
   * @path [POST] /ErrorRecords/update
   * @name ErrorRecord#updateAll
   * @param {object|function|*} [opts] - Optional params
   * @param {string} [opts.where] - Criteria to match model instances
   * @param {object} [opts.data] - An object of model property name/value pairs
   * @param {function} [cb] - Callback function
   */
  updateAll(opts, cb) {
    if (typeof opts === 'function') {
      cb = opts;
      opts = null;
    }
    opts = opts || {};

    const req = {
      method: 'POST',
      headers: {}
    };

    req.headers['Accept'] = 'application/json';

    req.params = {
      where: opts['where'],
    };
    req.data = opts['data'];

    const path = '/ErrorRecords/update';

    return this.requestor.request(path, req).then(function(result) {
      if (!cb) return result;
      cb(result);
    }, function(err) {
      if (!cb) throw err;
      cb(null, err);
    });
  }
  /**
   * Count instances of the model matched by where from the data source.
   *
   * @method
   * @path [GET] /ErrorRecords/count
   * @name ErrorRecord#count
   * @param {object|function|*} [opts] - Optional params
   * @param {string} [opts.where] - Criteria to match model instances
   * @param {function} [cb] - Callback function
   */
  count(opts, cb) {
    if (typeof opts === 'function') {
      cb = opts;
      opts = null;
    }
    opts = opts || {};

    const req = {
      method: 'GET',
      headers: {}
    };

    req.headers['Accept'] = 'application/json';

    req.params = {
      where: opts['where'],
    };

    const path = '/ErrorRecords/count';

    return this.requestor.request(path, req).then(function(result) {
      if (!cb) return result;
      cb(result);
    }, function(err) {
      if (!cb) throw err;
      cb(null, err);
    });
  }
  /**
   * Create a change stream.
   *
   * @method
   * @path [POST] /ErrorRecords/change-stream
   * @name ErrorRecord#createChangeStreamViaPost
   * @param {object|function|*} [opts] - Optional params
   * @param {string} [opts.options] - options
   * @param {function} [cb] - Callback function
   */
  createChangeStreamViaPost(opts, cb) {
    if (typeof opts === 'function') {
      cb = opts;
      opts = null;
    }
    opts = opts || {};

    const req = {
      method: 'POST',
      headers: {}
    };

    req.headers['Accept'] = 'application/json';

    req.form = {
      options: opts['options'],
    };

    const path = '/ErrorRecords/change-stream';

    return this.requestor.request(path, req).then(function(result) {
      if (!cb) return result;
      cb(result);
    }, function(err) {
      if (!cb) throw err;
      cb(null, err);
    });
  }
  /**
   * Create a change stream.
   *
   * @method
   * @path [GET] /ErrorRecords/change-stream
   * @name ErrorRecord#createChangeStream
   * @param {object|function|*} [opts] - Optional params
   * @param {string} [opts.options] - options
   * @param {function} [cb] - Callback function
   */
  createChangeStream(opts, cb) {
    if (typeof opts === 'function') {
      cb = opts;
      opts = null;
    }
    opts = opts || {};

    const req = {
      method: 'GET',
      headers: {}
    };

    req.headers['Accept'] = 'application/json';

    req.params = {
      options: opts['options'],
    };

    const path = '/ErrorRecords/change-stream';

    return this.requestor.request(path, req).then(function(result) {
      if (!cb) return result;
      cb(result);
    }, function(err) {
      if (!cb) throw err;
      cb(null, err);
    });
  }
}

module.exports = ErrorRecord;