(ns leiningen.new.backrest
  (:require [leiningen.new.templates :refer [renderer name-to-path ->files slurp-resource]]
            [leiningen.core.main :as main]
            [clojure.string :as string]
            [clojure.java.io :as io]))

(defn statics [base & files]
  (map (fn [file]
         (let [path (string/join "/" ["leiningen" "new" "backrest" base file])]
           [(str base "/" file) (slurp-resource (io/resource path))])) files))

(defn backrest
  "create the new project"
  [name]
  (let [data {:name name
              :sanitized (name-to-path name)}
        render #((renderer "backrest") % data)]
    (main/info "Generating fresh 'lein new' backrest project.")
    (apply ->files data
             (concat [[".gitignore" (render "gitignore")]
                      ["project.clj" (render "project.clj")]
                      ["src/{{sanitized}}/handler.clj" (render "handler.clj")]
                      ["src/{{sanitized}}/auth_routes.clj" (render "auth_routes.clj")]
                      ["src/{{sanitized}}/data_routes.clj" (render "data_routes.clj")]
                      ["src/{{sanitized}}/db.clj" (render "db.clj")]
                      ["src/{{sanitized}}/utils.clj" (render "utils.clj")]

                      ["resources/r.js" (render "resources/r.js")]
                      ["resources/build.js" (render "resources/build.js")]

                      ["resources/public/index.html" (render "resources/public/index.html")]

                      ["resources/public/css/{{sanitized}}.css" (render "resources/public/css/project.css")]]

                     (statics "resources" "r.js" "build.js")
                     (statics "resources/public/css" "bootstrap.css" "bootstrap-theme.css")
                     (statics "resources/public/js/lib"
                              "ember.js" "require.js" "text.js" "ember-data-beta2.js" "handlebars-1.0.0.js"
                              "jquery-2.0.3.min.js" "jquery-2.0.3.min.map")
                     (statics "resources/public/js"
                              "main.js" "routes.js" "application.js" "models.js" "templates.js")
                     (statics "resources/public/js/templates"
                              "application.html" "login.html")))))
