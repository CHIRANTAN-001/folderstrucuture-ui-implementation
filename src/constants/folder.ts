type Node = {
    name: string;
    nodes?: Node[];
};

export const nodes: Node[] = [
    {
        name: "Home",
        nodes: [
            {
                name: "src",
                nodes: [
                    {
                        name: "components",
                        nodes: [
                            {
                                name: "Header.tsx",
                            },
                            {
                                name: "Footer.tsx",
                            }
                        ]
                    },
                    {
                        name: "pages",
                        nodes: [
                            {
                                name: "HomePage.tsx",
                            },
                            {
                                name: "AboutPage.tsx",
                            }
                        ]
                    },
                    {
                        name: "hooks",
                        nodes: [
                            {
                                name: "useDebounce.tsx",
                            },
                            {
                                name: "useTimout.tsx",
                            }
                        ]
                    },
                    {
                        name: "redux",
                        nodes: [
                            {
                                name: "reducers",
                                nodes: [
                                    {
                                        name: "counterReducer.tsx",
                                    }
                                ]
                            },
                            {
                                name: "store.tsx",
                            }
                        ]
                    },
                    {
                        name: "App.tsx",
                    },
                    {
                        name: "index.tsx",
                    }
                ]
            },
        ]
    }
]