import * as z from 'zod'

const foo = z.literal("foo")

const s = "foo"

foo.parse(s)
