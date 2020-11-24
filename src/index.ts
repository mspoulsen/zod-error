import {
  literal
} from 'zod'

const foo = literal("foo")

const s = "foo"

foo.parse(s)
