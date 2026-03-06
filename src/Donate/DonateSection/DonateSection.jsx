// components/DonationSection.jsx
import React, { useState } from 'react';

const DonationSection = () => {
  const [paymentMethod, setPaymentMethod] = useState('bank');
  const [showMobilePreview, setShowMobilePreview] = useState(true); // For demo purposes

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    // You could add a toast notification here
    alert('Copied to clipboard!');
  };

  return (
    <section className="bg-white dark:bg-slate-900/50 py-16">
      <div className="mx-auto max-w-3xl px-6">
        <div className="rounded-3xl bg-background-light dark:bg-background-dark p-8 shadow-sm ring-1 ring-slate-200 dark:ring-slate-800">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Choose Payment Method</h2>
            <p className="mt-2 text-slate-600 dark:text-slate-400">Select your preferred way to support</p>
          </div>

          {/* Toggle Switch */}
          <div className="flex p-1 bg-slate-200 dark:bg-slate-800 rounded-2xl mb-8">
            <label className="relative flex-1 cursor-pointer">
              <input
                type="radio"
                name="payment_method"
                value="bank"
                checked={paymentMethod === 'bank'}
                onChange={() => setPaymentMethod('bank')}
                className="peer sr-only"
              />
              <div className="flex items-center justify-center rounded-xl py-3 text-sm font-bold text-slate-600 dark:text-slate-400 transition-all peer-checked:bg-white dark:peer-checked:bg-slate-700 peer-checked:text-primary peer-checked:shadow-sm">
                <span className="material-symbols-outlined mr-2 text-lg">account_balance</span>
                Bank Transfer
              </div>
            </label>

            <label className="relative flex-1 cursor-pointer">
              <input
                type="radio"
                name="payment_method"
                value="mobile"
                checked={paymentMethod === 'mobile'}
                onChange={() => setPaymentMethod('mobile')}
                className="peer sr-only"
              />
              <div className="flex items-center justify-center rounded-xl py-3 text-sm font-bold text-slate-600 dark:text-slate-400 transition-all peer-checked:bg-white dark:peer-checked:bg-slate-700 peer-checked:text-primary peer-checked:shadow-sm">
                <span className="material-symbols-outlined mr-2 text-lg">smartphone</span>
                Mobile Money
              </div>
            </label>
          </div>

          {/* Payment Details Display */}
          <div className="space-y-6">
            {/* Bank Details */}
            {paymentMethod === 'bank' && (
              <div className="space-y-4" id="bank-details">
                <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5">
                  <div className="flex flex-col gap-4">
                    <div className="flex justify-between items-center border-b border-slate-100 dark:border-slate-800 pb-3">
                      <span className="text-sm text-slate-500">Account Name</span>
                      <span className="font-semibold text-slate-900 dark:text-white">
                        HopeBridge Global Foundation
                      </span>
                    </div>
                    <div className="flex justify-between items-center border-b border-slate-100 dark:border-slate-800 pb-3">
                      <span className="text-sm text-slate-500">Bank Name</span>
                      <span className="font-semibold text-slate-900 dark:text-white">
                        International Trust Bank
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-slate-500">Account Number</span>
                      <div className="flex items-center gap-2">
                        <span className="font-mono font-bold text-lg text-primary">
                          9876 5432 1012
                        </span>
                        <button
                          onClick={() => handleCopy('9876 5432 1012')}
                          className="text-slate-400 hover:text-primary transition-colors"
                        >
                          <span className="material-symbols-outlined text-sm">content_copy</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Mobile Money Details */}
            {paymentMethod === 'mobile' && (
              <div className="space-y-4" id="mobile-details">
                <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5">
                  <div className="flex flex-col gap-4">
                    <div className="flex justify-between items-center border-b border-slate-100 dark:border-slate-800 pb-3">
                      <span className="text-sm text-slate-500">Provider</span>
                      <span className="font-semibold text-slate-900 dark:text-white">
                        GlobalPay / MTN Money
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-slate-500">Mobile Number</span>
                      <div className="flex items-center gap-2">
                        <span className="font-mono font-bold text-lg text-primary">
                          +1 (555) 012-3456
                        </span>
                        <button
                          onClick={() => handleCopy('+1 (555) 012-3456')}
                          className="text-slate-400 hover:text-primary transition-colors"
                        >
                          <span className="material-symbols-outlined text-sm">content_copy</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* For demo purposes, showing the alternate state as a preview */}
            <div className="pt-6 border-t border-slate-200 dark:border-slate-800">
              <p className="text-xs text-center text-slate-500 mb-6">
                {paymentMethod === 'bank' ? 'Mobile Money Option (Preview)' : 'Bank Transfer Option (Preview)'}
              </p>
              <div className="rounded-2xl border border-dashed border-slate-300 dark:border-slate-700 p-5 opacity-75">
                {paymentMethod === 'bank' ? (
                  <div className="flex flex-col gap-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-slate-500">Provider</span>
                      <span className="font-semibold text-slate-900 dark:text-white">GlobalPay / MTN Money</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-slate-500">Mobile Number</span>
                      <span className="font-mono font-bold text-primary">+1 (555) 012-3456</span>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col gap-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-slate-500">Bank Name</span>
                      <span className="font-semibold text-slate-900 dark:text-white">International Trust Bank</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-slate-500">Account Number</span>
                      <span className="font-mono font-bold text-primary">9876 5432 1012</span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <p className="text-center text-xs text-slate-500 leading-relaxed italic">
              * Please use your full name as the transaction reference so we can send you a receipt.
              <br />
              HopeBridge is a registered 501(c)(3) nonprofit organization.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonationSection;