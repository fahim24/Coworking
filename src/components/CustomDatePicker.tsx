import { ReactNode } from "react";
import { DatePicker, DatePickerProps } from "antd";
import styled from "styled-components";

type CustomDatePickerProps = DatePickerProps & {
	prefixIcon?: ReactNode;
};

const DatePickerWrapper = styled.div`
	position: relative;
	width: 100%;

	.prefix-icon-wrapper {
		position: absolute;
		z-index: 1;
		width: 3rem;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	&& .ant-picker {
		width: 100%;
	}

	&& .ant-picker .ant-picker-input {
		padding-left: calc(3rem - 8px);
	}
	&& .ant-picker-input > input::placeholder {
		color: #161c2d;
	}
`;

const CustomDatePicker = ({ prefixIcon, children, ...rest }: CustomDatePickerProps) => {
	return (
		<DatePickerWrapper>
			{prefixIcon && <div className="prefix-icon-wrapper">{prefixIcon}</div>}
			<DatePicker className="w-full" {...rest}>
				{children}
			</DatePicker>
		</DatePickerWrapper>
	);
};

export default CustomDatePicker;
