import React from "react";
import './_counter.scss'
import counter from "../../js/counter";


class Counter extends React.Component {
    componentDidMount() {
        counter();
    }

    render() {
        return (
            <section className="count-box">
                <div className="container">
                    <div className="count-wrapper">
                        <div className="count-box__item">
                            <span className="border"></span>
                            <div className="count-box__cont">
                                <div className="number">
                                    <span className="value counter" data-count="90">0</span>
                                </div>
                                <div className="text">Completed Project</div>
                            </div>
                        </div>
                        <div className="count-box__item">
                            <span className="border"></span>
                            <div className="count-box__cont">
                                <div className="number">
                                    <span className="value percent counter" data-count="100">0</span><span
                                    className="percent">%</span>
                                </div>
                                <div className="text">Completed Project</div>
                            </div>
                        </div>
                        <div className="count-box__item">
                            <span className="border"></span>
                            <div className="count-box__cont">
                                <div className="number">
                                    <span className="value counter" data-count="69">0</span>
                                </div>
                                <div className="text">Completed Project</div>
                            </div>
                        </div>
                        <div className="count-box__item">
                            <span className="border"></span>
                            <div className="count-box__cont">
                                <div className="number">
                                    <span className="value percent counter" data-count="1001">0</span><span
                                    className="percent">%</span>
                                </div>
                                <div className="text">Cool guys</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Counter
