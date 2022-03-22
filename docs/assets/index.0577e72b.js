var k = Object.defineProperty,
	E = Object.defineProperties;
var I = Object.getOwnPropertyDescriptors;
var T = Object.getOwnPropertySymbols;
var R = Object.prototype.hasOwnProperty,
	B = Object.prototype.propertyIsEnumerable;
var x = (o, t, r) =>
		t in o
			? k(o, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
			: (o[t] = r),
	c = (o, t) => {
		for (var r in t || (t = {})) R.call(t, r) && x(o, r, t[r]);
		if (T) for (var r of T(t)) B.call(t, r) && x(o, r, t[r]);
		return o;
	},
	u = (o, t) => E(o, I(t));
import {
	r as y,
	j as e,
	c as F,
	A as L,
	a as l,
	T as P,
	b as p,
	I as h,
	d as j,
	s as z,
	e as C,
	m as D,
	B as a,
	f as w,
	g as N,
	h as O,
	L as b,
	i as v,
	C as A,
	S as _,
	k as M,
	l as $,
	F as G,
	G as m,
	n as H,
	o as W,
	R as q,
	p as K,
} from "./vendor.ddb785ae.js";
const V = function () {
	const t = document.createElement("link").relList;
	if (t && t.supports && t.supports("modulepreload")) return;
	for (const n of document.querySelectorAll('link[rel="modulepreload"]')) s(n);
	new MutationObserver((n) => {
		for (const d of n)
			if (d.type === "childList")
				for (const i of d.addedNodes)
					i.tagName === "LINK" && i.rel === "modulepreload" && s(i);
	}).observe(document, { childList: !0, subtree: !0 });
	function r(n) {
		const d = {};
		return (
			n.integrity && (d.integrity = n.integrity),
			n.referrerpolicy && (d.referrerPolicy = n.referrerpolicy),
			n.crossorigin === "use-credentials"
				? (d.credentials = "include")
				: n.crossorigin === "anonymous"
				? (d.credentials = "omit")
				: (d.credentials = "same-origin"),
			d
		);
	}
	function s(n) {
		if (n.ep) return;
		n.ep = !0;
		const d = r(n);
		fetch(n.href, d);
	}
};
V();
const S = y.exports.createContext({}),
	J = (o, t) => {
		switch (t.type) {
			case "addTodo":
				return u(c({}, o), { todos: [t.payload, ...o.todos] });
			case "completeTodo":
				return u(c({}, o), {
					todosCompleted: [t.payload, ...o.todosCompleted],
					todos: o.todos.filter((r) => t.payload.id !== r.id),
				});
			case "deleteTodo":
				return u(c({}, o), {
					todos: o.todos.filter((r) => t.payload.id !== r.id),
				});
			default:
				return o;
		}
	},
	Q = {
		todos: [
			{ id: 9876, description: "Hacer de comer" },
			{ id: 12312, description: "Hacer ejercicio" },
			{ id: 5555, description: "Hacer compras" },
		],
		todosCompleted: [],
	},
	U = ({ children: o }) => {
		const [t, r] = y.exports.useReducer(J, Q),
			s = (i, f) => {
				r({ type: "addTodo", payload: { id: i, description: f } });
			},
			n = (i) => {
				r({ type: "deleteTodo", payload: { id: i } });
			},
			d = (i, f) => {
				r({ type: "completeTodo", payload: { id: i, description: f } });
			};
		return e(S.Provider, {
			value: { todoState: t, AddTodo: s, DeleteTodo: n, CompleteTodo: d },
			children: o,
		});
	},
	X = F({
		palette: {
			background: { default: "#0B163E" },
			primary: { dark: "#0B163E", main: "#1E3D6E", light: "#6CE1CF" },
			secondary: { main: "#75E3F0", light: "#EEF4EA" },
		},
		typography: { fontFamily: ["Roboto"].join(",") },
	}),
	Y = () =>
		e(L, {
			sx: { backgroundColor: "primary.main", display: "flex" },
			position: "static",
			children: l(P, {
				sx: { display: "flex", justifyContent: "space-between" },
				children: [
					e(p, { variant: "h6", children: "TodoApp - TS" }),
					e(h, {
						size: "large",
						"aria-label": "search",
						color: "inherit",
						sx: { align: "flex-end" },
						children: e(j, {}),
					}),
				],
			}),
		}),
	Z = (o) => {
		const [t, r] = y.exports.useState(o);
		return {
			input: t,
			handleChange: ({ target: { name: d, value: i } }) => {
				r(u(c({}, t), { [d]: i }));
			},
			handleReset: (d = o) => {
				r(d);
			},
		};
	},
	ee = z(C)(({ theme: o }) => ({
		"& .MuiOutlinedInput-root": {
			"& fieldset": { borderColor: o.palette.secondary.main },
			"&:hover fieldset": { borderColor: o.palette.secondary.light },
			"&.Mui-focused fieldset": { borderColor: o.palette.secondary.light },
		},
	})),
	oe = D({
		box: { display: "flex", justifyContent: "center", mx: 1, my: 4 },
		iconButton: { ml: 0.5 },
	}),
	g = () => {
		const {
				todoState: o,
				AddTodo: t,
				DeleteTodo: r,
				CompleteTodo: s,
			} = y.exports.useContext(S),
			{ todos: n, todosCompleted: d } = o;
		return {
			todos: n,
			todosCompleted: d,
			AddTodo: t,
			DeleteTodo: r,
			CompleteTodo: s,
		};
	},
	te = () => {
		const o = oe(),
			{ AddTodo: t } = g(),
			{
				input: { inputTodo: r },
				handleChange: s,
				handleReset: n,
			} = Z({ inputTodo: "" }),
			d = (i) => {
				i.preventDefault(), t(Date.now(), r), n();
			};
		return l(a, {
			sx: { borderRadius: 3, backgroundColor: "primary.main", p: 2 },
			children: [
				e(p, {
					variant: "h2",
					align: "center",
					sx: { color: "secondary.light", my: 4 },
					children: "Todo App",
				}),
				e("form", {
					onSubmit: d,
					children: l(a, {
						className: o.box,
						children: [
							e(ee, {
								fullWidth: !0,
								autoComplete: "off",
								variant: "outlined",
								name: "inputTodo",
								value: r,
								onChange: s,
								sx: { input: { color: "secondary.light" } },
								inputProps: { style: { textAlign: "center" } },
								InputProps: {
									endAdornment: e(w, {
										position: "end",
										children: e(h, {
											color: "secondary",
											onClick: () => n(),
											"aria-label": "toggle password visibility",
											edge: "end",
											children: e(N, {}),
										}),
									}),
								},
							}),
							e(h, {
								className: o.iconButton,
								color: "secondary",
								size: "large",
								onClick: d,
								children: e(O, { fontSize: "inherit" }),
							}),
						],
					}),
				}),
			],
		});
	},
	re = () => {
		const { todosCompleted: o } = g();
		return l(a, {
			sx: { borderRadius: 3, backgroundColor: "primary.main", my: 1.5, mx: 1 },
			children: [
				e(p, {
					variant: "h3",
					align: "center",
					sx: { m: 2, p: 2, color: "secondary.light" },
					children: "Completed Todos",
				}),
				e(b, {
					children: e(v, {
						children: o.map(({ id: t, description: r }) =>
							e(
								A,
								{
									children: e(p, {
										align: "center",
										variant: "h5",
										sx: { m: 2 },
										children: r,
									}),
								},
								t
							)
						),
					}),
				}),
			],
		});
	},
	ne = () => {
		const { todos: o, DeleteTodo: t, CompleteTodo: r } = g();
		return e(a, {
			sx: { borderRadius: 3, backgroundColor: "primary.main", my: 1.5, mx: 1 },
			children: l(b, {
				children: [
					e(p, {
						variant: "h3",
						align: "center",
						sx: { m: 2, color: "secondary.light" },
						children: "Todo List",
					}),
					e(v, {
						children: o.map(({ id: s, description: n }) =>
							e(
								A,
								{
									children: l(a, {
										sx: { display: "flex" },
										children: [
											e(C, {
												disabled: !0,
												sx: { ml: 5, mr: -2, my: 2 },
												fullWidth: !0,
												variant: "standard",
												id: "standard-basic",
												defaultValue: n,
											}),
											l(_, {
												direction: "row",
												sx: { m: 2 },
												children: [
													e(h, {
														color: "secondary",
														size: "large",
														onClick: () => r(s, n),
														children: e(M, { fontSize: "inherit" }),
													}),
													e(h, {
														onClick: () => t(s),
														color: "secondary",
														size: "large",
														children: e($, { fontSize: "inherit" }),
													}),
												],
											}),
										],
									}),
								},
								s
							)
						),
					}),
				],
			}),
		});
	},
	de = () =>
		l(G, {
			children: [
				e(Y, {}),
				e(a, {
					sx: { m: 3 },
					children: l(m, {
						container: !0,
						children: [
							e(m, { item: !0, xs: 12, children: e(te, {}) }),
							e(m, { item: !0, xs: 6, children: e(ne, {}) }),
							e(m, { item: !0, xs: 6, children: e(re, {}) }),
						],
					}),
				}),
			],
		}),
	se = () =>
		e(U, {
			children: l(H, {
				theme: X,
				children: [e(W, {}), e(a, { sx: { m: 0.8 }, children: e(de, {}) })],
			}),
		});
q.render(
	e(K.StrictMode, { children: e(se, {}) }),
	document.getElementById("root")
);
