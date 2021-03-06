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
 * @class MediaEffectImport
 * @alias module:api/MediaEffectImport
 * @param {Requestor} [requestor] - The project domain or options object. If object, see the object's optional properties.
 */
class MediaEffectImport {
  constructor(requestor) {
    this.requestor = requestor;
  }
  /**
   * Fetches belongsTo relation service.
   *
   * @method
   * @path [GET] /MediaEffectImports/{id}/service
   * @name MediaEffectImport#getService
   * @param {string} id - MediaEffectImport id
   * @param {object|function|*} [opts] - Optional params
   * @param {boolean} [opts.refresh] - refresh
   * @param {function} [cb] - Callback function
   */
  getService(id, opts, cb) {
    // verify the required parameter 'id' is set
    if (id === undefined || id === null) {
      throw new Error("Missing the required parameter 'id' when calling getService");
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
      refresh: opts['refresh'],
    };

    const path = utils.buildPath('/MediaEffectImports/{id}/service', {
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
   * Find a related item by id for errorRecords.
   *
   * @method
   * @path [GET] /MediaEffectImports/{id}/errorRecords/{fk}
   * @name MediaEffectImport#findErrorRecordsById
   * @param {string} id - MediaEffectImport id
   * @param {string} fk - Foreign key for errorRecords
   * @param {function} [cb] - Callback function
   */
  findErrorRecordsById(id, fk, cb) {
    // verify the required parameter 'id' is set
    if (id === undefined || id === null) {
      throw new Error("Missing the required parameter 'id' when calling findErrorRecordsById");
    }
    // verify the required parameter 'fk' is set
    if (fk === undefined || fk === null) {
      throw new Error("Missing the required parameter 'fk' when calling findErrorRecordsById");
    }

    const req = {
      method: 'GET',
      headers: {}
    };

    req.headers['Accept'] = 'application/json';

    const path = utils.buildPath('/MediaEffectImports/{id}/errorRecords/{fk}', {
      id: id,
      fk: fk,
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
   * Delete a related item by id for errorRecords.
   *
   * @method
   * @path [DELETE] /MediaEffectImports/{id}/errorRecords/{fk}
   * @name MediaEffectImport#destroyErrorRecordsById
   * @param {string} id - MediaEffectImport id
   * @param {string} fk - Foreign key for errorRecords
   * @param {function} [cb] - Callback function
   */
  destroyErrorRecordsById(id, fk, cb) {
    // verify the required parameter 'id' is set
    if (id === undefined || id === null) {
      throw new Error("Missing the required parameter 'id' when calling destroyErrorRecordsById");
    }
    // verify the required parameter 'fk' is set
    if (fk === undefined || fk === null) {
      throw new Error("Missing the required parameter 'fk' when calling destroyErrorRecordsById");
    }

    const req = {
      method: 'DELETE',
      headers: {}
    };

    req.headers['Accept'] = 'application/json';

    const path = utils.buildPath('/MediaEffectImports/{id}/errorRecords/{fk}', {
      id: id,
      fk: fk,
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
   * Update a related item by id for errorRecords.
   *
   * @method
   * @path [PUT] /MediaEffectImports/{id}/errorRecords/{fk}
   * @name MediaEffectImport#updateErrorRecordsById
   * @param {string} id - MediaEffectImport id
   * @param {string} fk - Foreign key for errorRecords
   * @param {object|function|*} [opts] - Optional params
   * @param {object} [opts.data] - data
   * @param {function} [cb] - Callback function
   */
  updateErrorRecordsById(id, fk, opts, cb) {
    // verify the required parameter 'id' is set
    if (id === undefined || id === null) {
      throw new Error("Missing the required parameter 'id' when calling updateErrorRecordsById");
    }
    // verify the required parameter 'fk' is set
    if (fk === undefined || fk === null) {
      throw new Error("Missing the required parameter 'fk' when calling updateErrorRecordsById");
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

    const path = utils.buildPath('/MediaEffectImports/{id}/errorRecords/{fk}', {
      id: id,
      fk: fk,
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
   * Queries errorRecords of MediaEffectImport.
   *
   * @method
   * @path [GET] /MediaEffectImports/{id}/errorRecords
   * @name MediaEffectImport#getErrorRecords
   * @param {string} id - MediaEffectImport id
   * @param {object|function|*} [opts] - Optional params
   * @param {string} [opts.filter] - filter
   * @param {function} [cb] - Callback function
   */
  getErrorRecords(id, opts, cb) {
    // verify the required parameter 'id' is set
    if (id === undefined || id === null) {
      throw new Error("Missing the required parameter 'id' when calling getErrorRecords");
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

    const path = utils.buildPath('/MediaEffectImports/{id}/errorRecords', {
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
   * Creates a new instance in errorRecords of this model.
   *
   * @method
   * @path [POST] /MediaEffectImports/{id}/errorRecords
   * @name MediaEffectImport#createErrorRecords
   * @param {string} id - MediaEffectImport id
   * @param {object|function|*} [opts] - Optional params
   * @param {object} [opts.data] - data
   * @param {function} [cb] - Callback function
   */
  createErrorRecords(id, opts, cb) {
    // verify the required parameter 'id' is set
    if (id === undefined || id === null) {
      throw new Error("Missing the required parameter 'id' when calling createErrorRecords");
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

    const path = utils.buildPath('/MediaEffectImports/{id}/errorRecords', {
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
   * Deletes all errorRecords of this model.
   *
   * @method
   * @path [DELETE] /MediaEffectImports/{id}/errorRecords
   * @name MediaEffectImport#deleteErrorRecords
   * @param {string} id - MediaEffectImport id
   * @param {function} [cb] - Callback function
   */
  deleteErrorRecords(id, cb) {
    // verify the required parameter 'id' is set
    if (id === undefined || id === null) {
      throw new Error("Missing the required parameter 'id' when calling deleteErrorRecords");
    }

    const req = {
      method: 'DELETE',
      headers: {}
    };

    req.headers['Accept'] = 'application/json';

    const path = utils.buildPath('/MediaEffectImports/{id}/errorRecords', {
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
   * Counts errorRecords of MediaEffectImport.
   *
   * @method
   * @path [GET] /MediaEffectImports/{id}/errorRecords/count
   * @name MediaEffectImport#countErrorRecords
   * @param {string} id - MediaEffectImport id
   * @param {object|function|*} [opts] - Optional params
   * @param {string} [opts.where] - Criteria to match model instances
   * @param {function} [cb] - Callback function
   */
  countErrorRecords(id, opts, cb) {
    // verify the required parameter 'id' is set
    if (id === undefined || id === null) {
      throw new Error("Missing the required parameter 'id' when calling countErrorRecords");
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
      where: opts['where'],
    };

    const path = utils.buildPath('/MediaEffectImports/{id}/errorRecords/count', {
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
   * Create a new instance of the model and persist it into the data source.
   *
   * @method
   * @path [POST] /MediaEffectImports
   * @name MediaEffectImport#create
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

    const path = '/MediaEffectImports';

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
   * @path [PATCH] /MediaEffectImports
   * @name MediaEffectImport#patchOrCreate
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

    const path = '/MediaEffectImports';

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
   * @path [PUT] /MediaEffectImports
   * @name MediaEffectImport#replaceOrCreate
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

    const path = '/MediaEffectImports';

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
   * @path [GET] /MediaEffectImports
   * @name MediaEffectImport#find
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

    const path = '/MediaEffectImports';

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
   * @path [POST] /MediaEffectImports/replaceOrCreate
   * @name MediaEffectImport#replaceOrCreateViaPost
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

    const path = '/MediaEffectImports/replaceOrCreate';

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
   * @path [POST] /MediaEffectImports/upsertWithWhere
   * @name MediaEffectImport#upsertWithWhere
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

    const path = '/MediaEffectImports/upsertWithWhere';

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
   * @path [GET] /MediaEffectImports/{id}/exists
   * @name MediaEffectImport#exists
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

    const path = utils.buildPath('/MediaEffectImports/{id}/exists', {
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
   * @path [HEAD] /MediaEffectImports/{id}
   * @name MediaEffectImport#existsViaHead
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

    const path = utils.buildPath('/MediaEffectImports/{id}', {
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
   * @path [GET] /MediaEffectImports/{id}
   * @name MediaEffectImport#findById
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

    const path = utils.buildPath('/MediaEffectImports/{id}', {
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
   * @path [PUT] /MediaEffectImports/{id}
   * @name MediaEffectImport#replaceById
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

    const path = utils.buildPath('/MediaEffectImports/{id}', {
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
   * @path [DELETE] /MediaEffectImports/{id}
   * @name MediaEffectImport#deleteById
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

    const path = utils.buildPath('/MediaEffectImports/{id}', {
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
   * @path [PATCH] /MediaEffectImports/{id}
   * @name MediaEffectImport#patchAttributes
   * @param {string} id - MediaEffectImport id
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

    const path = utils.buildPath('/MediaEffectImports/{id}', {
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
   * @path [POST] /MediaEffectImports/{id}/replace
   * @name MediaEffectImport#replaceByIdViaPost
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

    const path = utils.buildPath('/MediaEffectImports/{id}/replace', {
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
   * @path [GET] /MediaEffectImports/findOne
   * @name MediaEffectImport#findOne
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

    const path = '/MediaEffectImports/findOne';

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
   * @path [POST] /MediaEffectImports/update
   * @name MediaEffectImport#updateAll
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

    const path = '/MediaEffectImports/update';

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
   * @path [GET] /MediaEffectImports/count
   * @name MediaEffectImport#count
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

    const path = '/MediaEffectImports/count';

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
   * @path [POST] /MediaEffectImports/change-stream
   * @name MediaEffectImport#createChangeStreamViaPost
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

    const path = '/MediaEffectImports/change-stream';

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
   * @path [GET] /MediaEffectImports/change-stream
   * @name MediaEffectImport#createChangeStream
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

    const path = '/MediaEffectImports/change-stream';

    return this.requestor.request(path, req).then(function(result) {
      if (!cb) return result;
      cb(result);
    }, function(err) {
      if (!cb) throw err;
      cb(null, err);
    });
  }
  /**
   * 上传文件
   *
   * @method
   * @path [POST] /MediaEffectImports/upload/{type}
   * @name MediaEffectImport#upload
   * @param {string} type - 上传的文件内容类型，例如 MediaEffect
   * @param {function} [cb] - Callback function
   */
  upload(type, cb) {
    // verify the required parameter 'type' is set
    if (type === undefined || type === null) {
      throw new Error("Missing the required parameter 'type' when calling upload");
    }

    const req = {
      method: 'POST',
      headers: {}
    };

    req.headers['Accept'] = 'application/json';

    const path = utils.buildPath('/MediaEffectImports/upload/{type}', {
      type: type,
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
   * 下载文件
   *
   * @method
   * @path [GET] /MediaEffectImports/{id}/download
   * @name MediaEffectImport#download
   * @param {string} id - MediaEffectImport id
   * @param {function} [cb] - Callback function
   */
  download(id, cb) {
    // verify the required parameter 'id' is set
    if (id === undefined || id === null) {
      throw new Error("Missing the required parameter 'id' when calling download");
    }

    const req = {
      method: 'GET',
      headers: {}
    };

    req.headers['Accept'] = 'application/json';

    const path = utils.buildPath('/MediaEffectImports/{id}/download', {
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
}

module.exports = MediaEffectImport;