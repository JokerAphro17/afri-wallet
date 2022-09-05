import React from "react";
import PageHeader from "../../../layouts/components/page-header";
import { Row, Col, Card } from "react-bootstrap";
import { TransactionGraph } from "../dashboard/chart/index";
import CountUp from "react-countup";
import { fetchStats } from "../../../api/request";
import { alertClosed, alertPending } from "../../../components/sweet-alert";
import { data } from "autoprefixer";
import { errorNotif } from "../../../components/notification";
const AdminDashboardPage = (props) => {
    const [stats, setStats] = React.useState([]);

    const getStats = async () => {
        try {
            const response = await fetchStats();
            const data = response?.data?.data;
            if (data) {
                setStats(data);
                console.log(data);
            }
        } catch (error) {
            if (typeof error === "object") {
                errorNotif("Echec", "Une erreur est survenue");
            } else {
                errorNotif("Echec", error);
            }
        }
    };

    React.useEffect(() => {
        (async () => await getStats())();
    }, [data]);

    return (
        <>
            <PageHeader title={"Tableau de bord"} />
            <div>
                <Row>
                    <Col md={8} lg={8} xl={8} sm={12} xs={12}>
                        <Card bg="#eeee">
                            <Card.Header
                                style={{
                                    display: "flex !important",
                                    justifyContent: "center",
                                }}
                            >
                                <Card.Title as="h5" className="">
                                    <p>GRAPHE DES TRANSACTIONS PAR MOIS</p>
                                </Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <TransactionGraph />
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">
                                    <p>
                                        <i className="fa fa-info-circle"></i>{" "}
                                        les valeurs sont en millier de francs
                                    </p>
                                </small>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card bg="primary">
                            <Card.Header
                                style={{
                                    display: "flex !important",
                                    justifyContent: "center",
                                }}
                            >
                                <Card.Title as="h5" className="text-white">
                                    <p>STATISTIQUES</p>
                                </Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <p className="text-white">
                                    <i className="fa fa-user"></i> Nombre de
                                    clients:{" "}
                                    <CountUp
                                        end={stats?.customers}
                                        duration={5}
                                    />
                                </p>
                                <p className="text-white">
                                    <i className="fa fa-exchange"></i> Nombre de
                                    transactions:{" "}
                                    <CountUp
                                        end={stats?.nb_transaction}
                                        duration={5}
                                    />
                                </p>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Header
                                style={{
                                    display: "flex !important",
                                    justifyContent: "center",
                                }}
                            >
                                <Card.Title as="h5">
                                    <p>TOTAL DES TRANSACTIONS</p>
                                </Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <p
                                    style={{
                                        fontSize: "1.5rem",
                                        fontWeight: "bold",
                                        textAlign: "center",
                                    }}
                                >
                                    <CountUp
                                        end={parseFloat(stats?.total)}
                                        duration={7}
                                    />
                                    <small> FCFA</small>
                                </p>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </>
    );
};

export default AdminDashboardPage;
