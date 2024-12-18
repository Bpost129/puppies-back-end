import { Puppy } from '../models/puppy.js'

async function create(req, res) {
  try {
    const puppy = await Puppy.create(req.body)
    res.json(puppy)
  } catch (err) {
    console.log(err)
    res.json(err)
  }
}

async function index(req, res) {
  try {
    const puppies = await Puppy.find({}).sort({ createdAt: 'desc'})
    res.json(puppies)
  } catch (err) {
    console.log(err)
    res.json(err)
  }
}

async function deletePuppy(req, res) {
  try {
    const puppy = await Puppy.findByIdAndDelete(req.params.puppyId)
    res.json(puppy)
  } catch (err) {
    console.log(err)
    res.json(err)
  }
}

export {
  create,
  index,
  deletePuppy as delete,

}