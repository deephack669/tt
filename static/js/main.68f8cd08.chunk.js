(window.webpackJsonp = window.webpackJsonp || []).push([
    [0], {
        14: function(e, t, a) {
            e.exports = a.p + "static/media/persik.4e1ec840.png"
        },
        18: function(e, t, a) {
            e.exports = a(41)
        },
        40: function(e, t, a) {},
        41: function(e, t, a) {
            "use strict";
            a.r(t);
            var n = a(0),
                c = a.n(n),
                r = a(8),
                i = a.n(r),
                l = a(6),
                o = a.n(l),
                s = a(11),
                u = a(12),
                m = a(16),
                d = a(13),
                p = a(17),
                h = a(1),
                f = (a(39), function(e) {
                    var t = e.id,
                        a = e.go,
                        n = e.fetchedUser;
                    return c.a.createElement(h.Panel, {
                        id: t
                    }, c.a.createElement(h.PanelHeader, null, "Example"), n && c.a.createElement(h.Group, {
                        title: "User Data Fetched with VK Connect"
                    }, c.a.createElement(h.ListItem, {
                        before: n.photo_200 ? c.a.createElement(h.Avatar, {
                            src: n.photo_200
                        }) : null,
                        description: n.city && n.city.title ? n.city.title : ""
                    }, "".concat(n.first_name, " ").concat(n.last_name))), c.a.createElement(h.Group, {
                        title: "Navigation Example"
                    }, c.a.createElement(h.Div, null, c.a.createElement(h.Button, {
                        size: "xl",
                        level: "2",
                        onClick: a,
                        "data-to": "persik"
                    }, "Show me the Persik, please"))))
                }),
                E = a(14),
                b = a.n(E),
                k = (a(40), a(15)),
                v = a.n(k),
                g = a(9),
                P = a.n(g),
                w = Object(h.platform)(),
                y = function(e) {
                    return c.a.createElement(h.Panel, {
                        id: e.id
                    }, c.a.createElement(h.PanelHeader, {
                        left: c.a.createElement(h.HeaderButton, {
                            onClick: e.go,
                            "data-to": "home"
                        }, w === h.IOS ? c.a.createElement(v.a, null) : c.a.createElement(P.a, null))
                    }, "Persik"), c.a.createElement("img", {
                        className: "Persik",
                        src: b.a,
                        alt: "Persik The Cat"
                    }))
                },
                U = function(e) {
                    function t(e) {
                        var a;
                        return Object(s.a)(this, t), (a = Object(m.a)(this, Object(d.a)(t).call(this, e))).go = function(e) {
                            a.setState({
                                activePanel: e.currentTarget.dataset.to
                            })
                        }, a.state = {
                            activePanel: "home",
                            fetchedUser: null
                        }, a
                    }
                    return Object(p.a)(t, e), Object(u.a)(t, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = this;
                            o.a.subscribe(function(t) {
                                switch (t.detail.type) {
                                    case "VKWebAppGetUserInfoResult":
                                        e.setState({
                                            fetchedUser: t.detail.data
                                        });
                                        break;
                                    default:
                                        console.log(t.detail.type)
                                }
                            }), o.a.send("VKWebAppGetUserInfo", {})
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return c.a.createElement(h.View, {
                                activePanel: this.state.activePanel
                            }, c.a.createElement(f, {
                                id: "home",
                                fetchedUser: this.state.fetchedUser,
                                go: this.go
                            }), c.a.createElement(y, {
                                id: "persik",
                                go: this.go
                            }))
                        }
                    }]), t
                }(c.a.Component);
            o.a.send("VKWebAppInit", {}), i.a.render(c.a.createElement(U, null), document.getElementById("root"))
        }
    },
    [
        [18, 1, 2]
    ]
]);
//# sourceMappingURL=main.68f8cd08.chunk.js.map