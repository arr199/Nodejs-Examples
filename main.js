/* eslint-disable no-unused-vars */
const { sum, multiply, sub } = require('./01-operations.js')
const { stats } = require('./02-Pc-stats.js')
const os = require('node:os')
const fs = require('node:fs')
const { error } = require('node:console')
const { resolve } = require('node:path')
const { rejects } = require('node:assert')

const myPromise = new Promise((resolve, reject) => {
  resolve('Promise resolved')
  reject('Promise rejected')
})

async function getPromise () {
  await myPromise
}
getPromise()
