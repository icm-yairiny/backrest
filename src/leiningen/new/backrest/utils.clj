(ns {{sanitized}}.utils)

(defn s->int
  "converts a given string into an integer"
  [s]
  (Integer/valueOf s))

(defn s->double
  "converts a given string into a double"
  [s]
  (Double/valueOf s))
