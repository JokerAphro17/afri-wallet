import React, { useEffect, useState } from "react";
import {
    Button,
    Card,
    Col,
    OverlayTrigger,
    Placeholder,
    Row,
    Table,
    Tooltip,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { fetchAccountAdmin, fetchPayment } from "../../../../api/request";
import { CryptoIcon } from "../../../../components/icones";
import { errorNotif } from "../../../../components/notification";
import PaginationPage from "../../../../components/paginate";
import HANDLER_STORAGE from "../../../../data";
import PageHeader from "../../../../layouts/components/page-header";
import { USER_SESSION } from "../../../../utilities/constant/app.constant";
import { cryptoFullName, roleToShow } from "../../../../utilities/helper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AllTransactions = () => {
    const navigate = useNavigate();
    const [payment, setpayment] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPage, setTotalPage] = useState(0);
    const userConnect =
        HANDLER_STORAGE.GET(USER_SESSION, "object")?.data ?? null;

    useEffect(() => {
        (async () => await fetchAllpayment(0))();
    }, []);
    const fetchAllpayment = async (page) => {
        try {
            setpayment([]);
            setIsLoading(true);
            const response = await fetchPayment(page + 1);
            const dataReceive = response?.data?.data ?? null;
            const _payment = dataReceive?.data ?? [];
            if (_payment?.length > 0) {
                setCurrentPage(dataReceive?.current_page);
                setTotalPage(dataReceive?.last_page);
                setpayment(_payment);
            }
            setIsLoading(false);
            console.log(payment);
        } catch (error) {
            setIsLoading(false);
            if (typeof error === "object") {
            } else {
                errorNotif("Avertissement", error);
            }
        }
    };

    return (
        <>
            <PageHeader title={"Liste des compte administrateur"}></PageHeader>

            <Card body>
                <Table striped>
                    <thead>
                        <tr>
                            <th className="text-center">Crypto_Env</th>
                            <th className="text-center">montant_Envo</th>
                            <th className="text-center">Crypto_Reçu</th>
                            <th className="text-center">montant_recu</th>
                            <th className="text-center">Adress_recep</th>
                            <th className="text-center">Client</th>
                        </tr>
                    </thead>
                    <tbody>
                        {payment?.map((payment, index) => (
                            <tr key={index}>
                                <td>
                                    <div className="d-flex  align-items-center border-top-0 border-left-0 border-right-0">
                                        <div className="mr-2">
                                            <span className="avatar avatar-md brround cover-image">
                                                <CryptoIcon
                                                    name={
                                                        payment.devise_envoyee
                                                    }
                                                />
                                            </span>
                                        </div>
                                        <div className="">
                                            <div className="font-weight-semibold">
                                                {payment?.devise_envoyee}
                                            </div>
                                            <small className="text-muted">
                                                {cryptoFullName(
                                                    payment?.devise_envoyee
                                                )}
                                            </small>
                                        </div>
                                    </div>
                                </td>
                                <td className="text-center">
                                    {payment?.montant_envoye}
                                </td>
                                <td>
                                    <div className="d-flex  align-items-center border-top-0 border-left-0 border-right-0">
                                        <div className="mr-2">
                                            <span className="avatar avatar-md brround cover-image">
                                                <CryptoIcon
                                                    name={payment?.devise_recue}
                                                />
                                            </span>
                                        </div>
                                        <div className="">
                                            <div className="font-weight-semibold">
                                                {payment?.devise_recue}
                                            </div>
                                            <small className="text-muted">
                                                {cryptoFullName(
                                                    payment?.devise_recue
                                                )}
                                            </small>
                                        </div>
                                    </div>
                                </td>
                                <td className="text-center">
                                    {payment?.montant_recu}
                                </td>
                                <td>{payment?.adress_receiver}</td>
                                <td>{"Ilboudo Souleymane"}</td>
                            </tr>
                        ))}
                        {payment?.length <= 0 && !isLoading ? (
                            <tr>
                                <td colSpan={6} className="text-center">
                                    Aucun compte trouvé
                                </td>
                            </tr>
                        ) : null}
                        {isLoading ? (
                            <tr>
                                <td colSpan={6} className="text-center">
                                    Veuillez patienter ...
                                </td>
                            </tr>
                        ) : null}
                    </tbody>
                </Table>
                {payment?.length > 0 ? (
                    <PaginationPage
                        currentPage={currentPage}
                        totalPage={totalPage}
                        isLoading={isLoading}
                        onPageChange={async (page) =>
                            await fetchPayment(page?.selected ?? 0 + 1)
                        }
                    />
                ) : null}
            </Card>
        </>
    );
};

export default AllTransactions;
